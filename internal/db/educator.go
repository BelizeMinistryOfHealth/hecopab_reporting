package db

import (
	"database/sql"
	"encoding/json"
	"fmt"

	"moh.gov.bz/hecopab/reporting/internal/models"
)

func (d *Db) CreateEducatorMonthlyReport(r models.MonthlyReportRecord) error {
	stmt := `
INSERT INTO monthly_health_educator_report (id, district, facility, month, year, health_education, health_educator, created_at, created_by)
VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9);
`
	ed, err := json.Marshal(r.Report.HealthEducation)
	if err != nil {
		return fmt.Errorf("could not decode health education object: %+v", err)
	}
	_, err = d.Exec(stmt,
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
		return fmt.Errorf("error inserting new monthly health educator report to the database: %+v", err)
	}
	return nil
}

func (d *Db) ListMonthlyEducatorReport(year int) ([]models.MonthlyReportRecord, error) {
	stmt := `
SELECT id, district, facility, month, year, health_education, health_educator, created_at, created_by, updated_at, updated_by
FROM monthly_health_educator_report
WHERE year = $1
`
	rows, err := d.Query(stmt, year)
	if err != nil {
		return nil, fmt.Errorf("error retrieving montly educator reports from the database: %+v", err)
	}
	defer rows.Close()

	var reports []models.MonthlyReportRecord
	for rows.Next() {
		var report models.MonthlyReportRecord
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
			return nil, fmt.Errorf("error scanning monthly education reportss: %+v", err)
		}
		if updatedBy.Valid {
			report.UpdatedBy = updatedBy.String
		}
		reports = append(reports, report)
	}

	return reports, nil

}
