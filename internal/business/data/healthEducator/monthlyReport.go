package healthEducator

import (
	"database/sql"
	"encoding/json"
	"errors"
	"fmt"
)

// ErrNotFound is used when a specific Monthly Report is requested but not found
var ErrNotFound = errors.New("not found")

// EdMonthlyReport manages the set of DB API's for monthly report access.
type EdMonthlyReport struct {
	*sql.DB
}

// New constructs an Educators Monthly Report for db access.
func New(db *sql.DB) EdMonthlyReport {
	return EdMonthlyReport{db}
}

// Create adds an Educator's Monthly Report to the database. It returns an error if persisting fails.
func (e EdMonthlyReport) Create(r MonthlyReportRecord) error {
	stmt := `
	INSERT INTO monthly_health_educator_report 
	    (id, district, facility, month, year, health_education, health_educator, created_at, created_by)
	VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9);
`
	ed, err := json.Marshal(r.Report.HealthEducation)
	if err != nil {
		return fmt.Errorf("could not decode health education object: %w", err)
	}
	_, err = e.Exec(stmt,
		r.ID,
		r.Report.District,
		r.Report.Facility,
		r.Report.Month,
		r.Report.Year,
		ed,
		r.Report.HealthEducator,
		r.CreatedAt,
		r.CreatedBy)
	if err != nil {
		return fmt.Errorf("error inserting new monthly health educator report to the database: %w", err)
	}
	return nil
}

// List gets all Monthly Reports from the database.
func (e EdMonthlyReport) List(year int) ([]MonthlyReportRecord, error) {
	stmt := `
	SELECT 
	       id, district, facility, month, year, health_education, health_educator, created_at, created_by, updated_at, updated_by
	FROM 
	     monthly_health_educator_report
	WHERE 
	      year = $1
`
	rows, err := e.Query(stmt, year)
	if err != nil {
		return nil, fmt.Errorf("error retrieving montly educator reports from the database: %w", err)
	}
	defer rows.Close()

	var reports []MonthlyReportRecord
	for rows.Next() {
		var report MonthlyReportRecord
		var updatedBy sql.NullString
		err := rows.Scan(
			&report.ID,
			&report.Report.District,
			&report.Report.Facility,
			&report.Report.Month,
			&report.Report.Year,
			&report.Report.HealthEducation,
			&report.Report.HealthEducator,
			&report.CreatedAt,
			&report.CreatedBy,
			&report.UpdatedAt,
			&updatedBy)
		if err != nil {
			return nil, fmt.Errorf("error scanning monthly education reportss: %w", err)
		}
		if updatedBy.Valid {
			report.UpdatedBy = updatedBy.String
		}
		reports = append(reports, report)
	}

	return reports, nil
}
