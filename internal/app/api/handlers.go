// Package api contains the full set of handler functions and routes
// supported by the web api.
package api

import (
	"net/http"

	"github.com/gorilla/mux"
	"github.com/uris77/auth0"

	"moh.gov.bz/hecopab/reporting/internal/app"
	"moh.gov.bz/hecopab/reporting/internal/business/data/healthEducator"
)

func API(app app.App) *mux.Router {
	r := mux.NewRouter()
	eg := edMonthlyReportGroup{monthlyReport: healthEducator.New(app.Db.DB)}

	// Instantiate an aut0 client with a Cache with a key capacity of
	// 60 tokens and a ttl of 24 hours.
	auth0Client := auth0.NewAuth0(60, 518400)

	// Middleware that verifies JWT token and also enables CORS.
	authMid := NewChain(EnableCors(), VerifyToken(app.Auth.JwkUrl, app.Auth.Aud, app.Auth.Iss, auth0Client))

	// Router for all educator endpoints
	educatorRouter := r.PathPrefix("/api/educator").Subrouter()
	educatorRouter.HandleFunc("/monthlyReport", authMid.Then(eg.EdMonthlyReportHandlers)).
		Methods(http.MethodOptions, http.MethodPost, http.MethodGet, http.MethodPut)

	return r
}
