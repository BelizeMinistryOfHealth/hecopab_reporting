// Package api contains the full set of handler functions and routes
// supported by the web api.
package api

import (
	"context"
	firebase "firebase.google.com/go/v4"
	"fmt"
	"moh.gov.bz/hecopab/reporting/internal/app/auth"
	"net/http"

	"github.com/gorilla/mux"
	"moh.gov.bz/hecopab/reporting/internal/app"
	"moh.gov.bz/hecopab/reporting/internal/business/data/chw"
)

func API(ctx context.Context, app app.App) (*mux.Router, error) {
	r := mux.NewRouter()

	// Instantiate the user store. This is responsible for verifying the JWT tokens
	userStore, err := auth.NewStore(ctx, app.Firestore, &firebase.Config{
		ProjectID: app.ProjectID,
	}, app.FirestoreApiKey)
	if err != nil {
		return nil, fmt.Errorf("failed to initialize user store in API: %w", err)
	}
	// Middleware that verifies JWT token and also enables CORS.
	authMid := NewChain(EnableCors(), VerifyToken(userStore))

	// Router for all educator endpoints
	//eg := edMonthlyReportGroup{monthlyReport: healthEducator.New(app.Db.DB)}
	//educatorRouter := r.PathPrefix("/api/educator").Subrouter()
	//educatorRouter.HandleFunc("/monthlyReport", authMid.Then(eg.EdMonthlyReportHandlers)).
	//	Methods(http.MethodOptions, http.MethodPost, http.MethodGet, http.MethodPut)

	// Router for chw
	ch := chwMonthlyReports{chwMonthlyReport: chw.New(app.Firestore)}
	chwRouter := r.PathPrefix("/api/chw").Subrouter()
	chwRouter.HandleFunc("/monthlyReport/{id}", authMid.Then(ch.ChwMonthlyReportResourceHandler)).
		Methods(http.MethodGet, http.MethodOptions)
	chwRouter.HandleFunc("/monthlyReport", authMid.Then(ch.ChwMonthlyReportHandlers)).
		Methods(http.MethodPost, http.MethodGet, http.MethodPut, http.MethodOptions)

	return r, nil
}
