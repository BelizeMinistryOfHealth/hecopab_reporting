package api

import (
	"encoding/json"
	"net/http"
	"strconv"
	"time"

	"github.com/google/uuid"
	log "github.com/sirupsen/logrus"

	"moh.gov.bz/hecopab/reporting/internal/app"
	"moh.gov.bz/hecopab/reporting/internal/business/data/healthEducator"
)

type edMonthlyReportGroup struct {
	monthlyReport healthEducator.EdMonthlyReport
}

func (eg edMonthlyReportGroup) EdMonthlyReportHandlers(w http.ResponseWriter, r *http.Request) {
	handlerName := "EdMonthlyReportHandlers"
	defer r.Body.Close()
	switch r.Method {
	case http.MethodOptions:
		return
	case http.MethodPost:
		token := r.Context().Value("user").(app.JwtToken)
		user := token.Email
		var report healthEducator.MonthlyReport
		if err := json.NewDecoder(r.Body).Decode(&report); err != nil {
			log.WithFields(log.Fields{
				"user":    user,
				"body":    r.Body,
				"handler": handlerName,
			}).WithError(err).Error("failed to decode the body")
			http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
			return
		}
		monthlyReport := healthEducator.MonthlyReportRecord{
			ID:        uuid.New().String(),
			Report:    report,
			CreatedBy: user,
			CreatedAt: time.Now(),
		}
		if err := eg.monthlyReport.Create(monthlyReport); err != nil {
			log.WithFields(log.Fields{
				"user":          user,
				"monthlyReport": monthlyReport,
				"handler":       handlerName,
			}).WithError(err).Error("failed to save new monthly report")
			http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
			return
		}
		if err := json.NewEncoder(w).Encode(monthlyReport); err != nil {
			log.WithFields(log.Fields{
				"user":          user,
				"monthlyReport": monthlyReport,
				"handler":       handlerName,
			}).WithError(err).Error("failed to encode response")
		}
	case http.MethodGet:
		token := r.Context().Value("user").(app.JwtToken)
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

		reports, err := eg.monthlyReport.List(yr)
		if err != nil {
			log.WithFields(log.Fields{
				"user":    user,
				"year":    yr,
				"handler": handlerName,
			}).WithError(err).Error("failed to retrieve health educator monthly reports")
			http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
			return
		}
		if err := json.NewEncoder(w).Encode(reports); err != nil {
			log.WithFields(log.Fields{
				"user":    user,
				"year":    yr,
				"reports": reports,
				"handler": handlerName,
			}).WithError(err).Error("failed to encode the health educator's monthly reports")
		}

	case http.MethodPut:
		token := r.Context().Value("user").(app.JwtToken)
		user := token.Email
		var report healthEducator.MonthlyReportRecord
		if err := json.NewDecoder(r.Body).Decode(&report); err != nil {
			log.WithFields(log.Fields{
				"user":    user,
				"body":    r.Body,
				"method":  "PUT",
				"handler": handlerName,
			}).WithError(err).Error("failed to decode the body")
			http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
			return
		}
		report.UpdatedBy = user
		today := time.Now()
		report.UpdatedAt = &today
		if err := eg.monthlyReport.Update(report); err != nil {
			log.WithFields(log.Fields{
				"user":    user,
				"report":  report,
				"method":  "PUT",
				"handler": handlerName,
			}).WithError(err).Error("error updating health educator monthly report")
			http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
			return
		}
		if err := json.NewEncoder(w).Encode(report); err != nil {
			log.WithFields(log.Fields{
				"user":    user,
				"report":  report,
				"method":  "PUT",
				"handler": handlerName,
			}).WithError(err).Error("error encoding updated health educator monthly report")
			http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
			return
		}
	}

}
