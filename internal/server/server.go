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

	"moh.gov.bz/hecopab/reporting/internal/api"
	"moh.gov.bz/hecopab/reporting/internal/app"
	"moh.gov.bz/hecopab/reporting/internal/config"
	"moh.gov.bz/hecopab/reporting/internal/db"
)

func RegisterHandlers(cnf config.AppConf) *mux.Router {
	r := mux.NewRouter()
	store, err := db.NewConnection(&cnf.Db)
	if err != nil {
		log.Errorf("could not establish connection to the database: %+v", err)
		os.Exit(1)
	}

	app := app.App{Db: store}
	log.Infof("Initiated App: %+v", app)
	apiRouter := r.PathPrefix("/api").Subrouter()
	apiRouter.HandleFunc("/test", api.TestHandler)
	return r
}

func NewServer(cnf config.AppConf) {
	r := RegisterHandlers(cnf)
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
