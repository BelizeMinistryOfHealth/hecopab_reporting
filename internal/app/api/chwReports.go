package api

import (
	"encoding/json"
	"moh.gov.bz/hecopab/reporting/internal/app/auth"
	"net/http"
	"strconv"
	"time"

	"github.com/google/uuid"
	"github.com/gorilla/mux"
	log "github.com/sirupsen/logrus"

	"moh.gov.bz/hecopab/reporting/internal/business/data/chw"
)

type chwMonthlyReports struct {
	chwMonthlyReport chw.Report
}

func (c chwMonthlyReports) ChwMonthlyReportHandlers(w http.ResponseWriter, r *http.Request) {
	handlerName := "ChwMonthlyReportHandlers"
	defer r.Body.Close()
	switch r.Method {
	case http.MethodOptions:
		return
	case http.MethodGet:
		token := r.Context().Value("user").(auth.JwtToken)
		user := token.Email
		year := r.URL.Query().Get("year")
		var yr int
		// Default to the current year if no year is provided.
		if len(year) == 0 {
			today := time.Now()
			yr = today.Year()
		}
		if yr == 0 {
			y, err := strconv.Atoi(year)
			if err != nil {
				log.WithFields(log.Fields{
					"user":    user,
					"handler": handlerName,
					"year":    year,
				}).WithError(err).Error("year must be a valid number")
				http.Error(w, "year must be a valid number", http.StatusBadRequest)
				return
			}
			yr = y
		}

		reports, err := c.chwMonthlyReport.List(r.Context(), yr)
		if err != nil {
			log.WithFields(log.Fields{
				"user":    user,
				"year":    yr,
				"handler": handlerName,
				"method":  "GET",
			}).WithError(err).Error("failed to retrieve chw monthly report")
			http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
			return
		}
		if err := json.NewEncoder(w).Encode(reports); err != nil {
			log.WithFields(log.Fields{
				"user":    user,
				"year":    yr,
				"reports": reports,
				"handler": handlerName,
				"method":  "GET",
			}).WithError(err).Error("error encoding chw monthly reports")
			http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
			return
		}
	case http.MethodPost:
		token := r.Context().Value("user").(auth.JwtToken)
		user := token.Email
		var report chw.MonthlyReport
		if err := json.NewDecoder(r.Body).Decode(&report); err != nil {
			log.WithFields(log.Fields{
				"user":    user,
				"body":    r.Body,
				"handler": handlerName,
				"method":  "POST",
			}).WithError(err).Error("error decoding body in request")
			http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
			return
		}
		reportRecord := chw.MonthlyReportRecord{
			ID:        uuid.New().String(),
			Report:    report,
			CreatedBy: user,
			CreatedAt: time.Now(),
		}
		if err := c.chwMonthlyReport.Create(r.Context(), reportRecord); err != nil {
			log.WithFields(log.Fields{
				"user":    user,
				"report":  reportRecord,
				"handler": handlerName,
				"method":  "POST",
			}).WithError(err).Error("failed to save new chw monthly report")
			http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
			return
		}
		if err := json.NewEncoder(w).Encode(reportRecord); err != nil {
			log.WithFields(log.Fields{
				"user":    user,
				"report":  reportRecord,
				"handler": handlerName,
				"method":  "POST",
			}).WithError(err).Error("failed to encode new chw monthly report")
			http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
			return
		}
	case http.MethodPut:
		token := r.Context().Value("user").(auth.JwtToken)
		user := token.Email
		var report chw.MonthlyReportRecord
		if err := json.NewDecoder(r.Body).Decode(&report); err != nil {
			log.WithFields(log.Fields{
				"user":    user,
				"body":    r.Body,
				"handler": handlerName,
				"method":  "PUT",
			}).WithError(err).Error("error decoding body in request")
			http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
			return
		}
		report.UpdatedBy = user
		today := time.Now()
		report.UpdatedAt = &today
		if err := c.chwMonthlyReport.Update(r.Context(), report); err != nil {
			log.WithFields(log.Fields{
				"user":    user,
				"report":  report,
				"handler": handlerName,
				"method":  "PUT",
			}).WithError(err).Error("error updating a chw monthly report")
			http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
			return
		}
		if err := json.NewEncoder(w).Encode(report); err != nil {
			log.WithFields(log.Fields{
				"user":    user,
				"report":  report,
				"handler": handlerName,
				"method":  "PUT",
			}).WithError(err).Error("error decoding chw monthly report")
			http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
			return
		}
	}
}

// ChwMonthlyReportResourceHandler is a handler for retrieving a single CHW Report resource.
func (c chwMonthlyReports) ChwMonthlyReportResourceHandler(w http.ResponseWriter, r *http.Request) {
	handlerName := "ChwMonthlyReportResourceHandler"
	defer r.Body.Close()
	switch r.Method {
	case http.MethodGet:
		token := r.Context().Value("user").(auth.JwtToken)
		user := token.Email
		vars := mux.Vars(r)
		id := vars["id"]
		report, err := c.chwMonthlyReport.GetById(r.Context(), id)
		if err != nil {
			log.WithFields(log.Fields{
				"user":    user,
				"handler": handlerName,
				"method":  "GET",
				"id":      id,
			}).WithError(err).Error("error retrieving a chw monthly report")
			http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
			return
		}
		if err := json.NewEncoder(w).Encode(report); err != nil {
			log.WithFields(log.Fields{
				"user":    user,
				"handler": handlerName,
				"report":  report,
				"method":  "GET",
				"id":      id,
			}).WithError(err).Error("failed to encode report")
			http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
			return
		}
	}
}
