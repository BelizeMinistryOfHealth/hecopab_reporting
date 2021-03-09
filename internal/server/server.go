package server

import (
	"context"
	"net/http"
	"os"
	"os/signal"
	"time"

	"github.com/gorilla/mux"
	_ "github.com/lib/pq"
	log "github.com/sirupsen/logrus"

	"moh.gov.bz/hecopab/reporting/internal/app"
	"moh.gov.bz/hecopab/reporting/internal/app/api"
	"moh.gov.bz/hecopab/reporting/internal/config"
	"moh.gov.bz/hecopab/reporting/internal/db"
)

func RegisterHandlers(ctx context.Context, cnf config.AppConf) *mux.Router {
	firestoreDb, err := db.NewFirestore(ctx, cnf.ProjectId)

	if err != nil {
		log.Errorf("could not establish connection to the database: %+v", err)
		os.Exit(1)
	}

	app := app.App{
		ProjectID:       cnf.ProjectId,
		Firestore:       firestoreDb,
		FirestoreApiKey: cnf.FirestoreApiKey,
	}
	router := api.API(app)
	log.Infof("Initiated App: %+v", app)
	//apiRouter := r.PathPrefix("/api").Subrouter()
	router.HandleFunc("/test", api.TestHandler)
	fs := http.FileServer(http.Dir("/var/lib/hecopab-www"))
	router.PathPrefix("/").Handler(http.StripPrefix("/", fs))
	staticFs := http.FileServer(http.Dir("/var/lib/hecopab-www"))
	router.PathPrefix("/static/").Handler(http.StripPrefix("/static/", staticFs))

	return router
}

func NewServer(cnf config.AppConf) {
	firestoreContext := context.Background()
	r := RegisterHandlers(firestoreContext, cnf)
	srv := &http.Server{
		Addr: "0.0.0.0:8080",
		// Good practice to set timeouts to avoid Slowloris attacks.
		WriteTimeout: time.Second * 15,
		ReadTimeout:  time.Second * 15,
		IdleTimeout:  time.Second * 60,
		Handler:      r, // Pass our instance of gorilla/mux in.
	}

	// Run our server in a goroutine so that it doesn't block.
	go func() {
		log.Println("Starting server on port 8080")
		if err := srv.ListenAndServe(); err != nil {
			log.Println(err)
		}
	}()

	c := make(chan os.Signal, 1)
	// We'll accept graceful shutdowns when quit via SIGINT (Ctrl+C)
	// SIGKILL, SIGQUIT or SIGTERM (Ctrl+/) will not be caught.
	signal.Notify(c, os.Interrupt)

	// Block until we receive our signal.
	<-c

	wait := time.Duration(30)
	// Create a deadline to wait for.
	ctx, cancel := context.WithTimeout(context.Background(), wait)
	defer cancel()
	// Doesn't block if no connections, but will otherwise wait
	// until the timeout deadline.
	srv.Shutdown(ctx)
	// Optionally, you could run srv.Shutdown in a goroutine and block on
	// <-ctx.Done() if your application should wait for other services
	// to finalize based on context cancellation.
	log.Println("shutting down")
	os.Exit(0)
}
