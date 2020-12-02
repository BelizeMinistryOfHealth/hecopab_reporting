package chw

import (
	"database/sql"
	"encoding/json"
	"fmt"
)

// ChwReport manages the set of DB API's for community health workers monthly report access.
type ChwReport struct {
	*sql.DB
}

// New constructs the db access API for chw monthly reports
func New(db *sql.DB) ChwReport {
	return ChwReport{db}
}

// Create creates a new chw monthly report
func (c ChwReport) Create(r MonthlyReportRecord) error {
	stmt := `
	INSERT INTO monthly_chw_report
		(id, district, month, year, community_health_worker, district_health_educator, rural_nurse,
		 patients_seen, deaths, births, complaints, duties_preformed, ed_sessions, meetings, created_by, created_at)
	VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16);	 
`
	ps, err := json.Marshal(r.Report.PatientsSeen)
	if err != nil {
		return fmt.Errorf("could not decode patients seen: %w", err)
	}
	ds, err := json.Marshal(r.Report.Deaths)
	if err != nil {
		return fmt.Errorf("could not decode deaths: %w", err)
	}
	bs, err := json.Marshal(r.Report.Births)
	if err != nil {
		return fmt.Errorf("could not decode births: %w", err)
	}
	cs, err := json.Marshal(r.Report.Complaints)
	if err != nil {
		return fmt.Errorf("could not decode complaints: %w", err)
	}
	dp, err := json.Marshal(r.Report.DutiesPerformed)
	if err != nil {
		return fmt.Errorf("could not decode duties performed: %w", err)
	}
	edSessions, err := json.Marshal(r.Report.HealthEdSessions)
	if err != nil {
		return fmt.Errorf("could not decode health education sessions when inserting into db: %w", err)
	}
	meetings, err := json.Marshal(r.Report.Meetings)
	if err != nil {
		return fmt.Errorf("could not decode meetings when inserting into db: %w", err)
	}
	_, err = c.Exec(stmt,
		r.ID,
		r.Report.District,
		r.Report.Month,
		r.Report.Year,
		r.Report.CommunityHealthWorker,
		r.Report.HealthEducator,
		r.Report.RuralNurse,
		ps,
		ds,
		bs,
		cs,
		dp,
		edSessions,
		meetings,
		r.CreatedBy,
		r.CreatedAt)
	if err != nil {
		return fmt.Errorf("error persisting a chw report to the database: %w", err)
	}

	return nil
}

// GetById fetches a chw monthly report from the database that matches the id
func (c ChwReport) GetById(id string) (*MonthlyReportRecord, error) {
	stmt := `
	SELECT 
		id, district_health_educator, rural_nurse, community_health_worker, district, month, year,
	       patients_seen, deaths, births, complaints, duties_preformed, ed_sessions, meetings, created_by, created_at,
	       updated_by, updated_at
	FROM monthly_chw_report
	WHERE id= $1
`
	row := c.QueryRow(stmt, id)
	var report MonthlyReportRecord
	var updatedBy sql.NullString
	err := row.Scan(
		&report.ID,
		&report.Report.HealthEducator,
		&report.Report.RuralNurse,
		&report.Report.CommunityHealthWorker,
		&report.Report.District,
		&report.Report.Month,
		&report.Report.Year,
		&report.Report.PatientsSeen,
		&report.Report.Deaths,
		&report.Report.Births,
		&report.Report.Complaints,
		&report.Report.DutiesPerformed,
		&report.Report.HealthEdSessions,
		&report.Report.Meetings,
		&report.CreatedBy,
		&report.CreatedAt,
		&updatedBy,
		&report.UpdatedAt)

	switch err {
	case sql.ErrNoRows:
		return nil, nil
	case nil:
		if updatedBy.Valid {
			report.UpdatedBy = updatedBy.String
		}
		return &report, nil
	default:
		return nil, fmt.Errorf("error retrieving chw monthly report from the database: %w", err)
	}
}

// List retrieves all chw monthly reports for the specified year
func (c ChwReport) List(year int) ([]MonthlyReportRecord, error) {
	stmt := `
	SELECT
		id, district, month, year, district_health_educator, rural_nurse, community_health_worker, deaths, births,
	    patients_seen, complaints, duties_preformed, ed_sessions, meetings, created_by, created_at, updated_by, updated_at   
	FROM 
	     monthly_chw_report
	WHERE
		year = $1
	ORDER BY month DESC;

`
	rows, err := c.Query(stmt, year)
	defer rows.Close()
	if err != nil {
		return nil, fmt.Errorf("error retrieving chw monthly report from database: %w", err)
	}
	var reports []MonthlyReportRecord
	for rows.Next() {
		var report MonthlyReportRecord
		var updatedBy sql.NullString
		err := rows.Scan(
			&report.ID,
			&report.Report.District,
			&report.Report.Month,
			&report.Report.Year,
			&report.Report.HealthEducator,
			&report.Report.RuralNurse,
			&report.Report.CommunityHealthWorker,
			&report.Report.Deaths,
			&report.Report.Births,
			&report.Report.PatientsSeen,
			&report.Report.Complaints,
			&report.Report.DutiesPerformed,
			&report.Report.HealthEdSessions,
			&report.Report.Meetings,
			&report.CreatedBy,
			&report.CreatedAt,
			&updatedBy,
			&report.UpdatedAt)
		if err != nil {
			return nil, fmt.Errorf("error scanning chw monthly report: %w", err)
		}
		if updatedBy.Valid {
			report.UpdatedBy = updatedBy.String
		}
		reports = append(reports, report)
	}
	return reports, nil
}

// Update updates an existing chw monthly report. Returns the error if there is one.
func (c ChwReport) Update(r MonthlyReportRecord) error {
	stmt := `
	UPDATE monthly_chw_report
	SET year=$2, month=$3, district=$4, district_health_educator=$5, community_health_worker=$6, rural_nurse=$7,
	    deaths=$8, births=$9, duties_preformed=$10, patients_seen=$11, complaints=$12, ed_sessions=$13, 
	    meetings=$14, updated_at=$15, updated_by=$16
	WHERE
		id=$1
`
	_, err := c.Exec(stmt,
		r.ID,
		r.Report.Year,
		r.Report.Month,
		r.Report.District,
		r.Report.HealthEducator,
		r.Report.CommunityHealthWorker,
		r.Report.RuralNurse,
		r.Report.Deaths,
		r.Report.Births,
		r.Report.DutiesPerformed,
		r.Report.PatientsSeen,
		r.Report.Complaints,
		r.Report.HealthEdSessions,
		r.Report.Meetings,
		r.UpdatedAt,
		r.UpdatedBy)
	if err != nil {
		return fmt.Errorf("error updating a chw monthly report: %w", err)
	}
	return nil
}
