package healthEducator

//
//import (
//	"database/sql"
//	"encoding/json"
//	"errors"
//	"fmt"
//)
//
//// ErrNotFound is used when a specific Monthly Report is requested but not found
//var ErrNotFound = errors.New("not found")
//
//// EdMonthlyReport manages the set of DB API's for monthly report access.
//type EdMonthlyReport struct {
//	*sql.DB
//}
//
//// New constructs an Educators Monthly Report for db access.
//func New(db *sql.DB) EdMonthlyReport {
//	return EdMonthlyReport{db}
//}
//
//// Create adds an Educator's Monthly Report to the database. It returns an error if persisting fails.
//func (e EdMonthlyReport) Create(r MonthlyReportRecord) error {
//	stmt := `
//	INSERT INTO monthly_health_educator_report
//	    (id, district, facility, month, year, health_education, referrals, other_services, capacity_building,
//	     community_platform_project, health_educator, created_at, created_by)
//	VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13);
//`
//	ed, err := json.Marshal(r.Report.HealthEducation)
//	if err != nil {
//		return fmt.Errorf("could not decode health education object: %w", err)
//	}
//	referrals, err := json.Marshal(r.Report.Referrals)
//	if err != nil {
//		return fmt.Errorf("could not decode referrals object: %w", err)
//	}
//	otherServices, err := json.Marshal(r.Report.OtherServices)
//	if err != nil {
//		return fmt.Errorf("could not decode other services object: %w", err)
//	}
//	capacityBuilding, err := json.Marshal(r.Report.CapacityBuilding)
//	if err != nil {
//		return fmt.Errorf("could not decode capacity building object: %w", err)
//	}
//	ccp, err := json.Marshal(r.Report.CommunityPlatformProject)
//	if err != nil {
//		return fmt.Errorf("could not decode community platform project object: %w", err)
//	}
//	_, err = e.Exec(stmt,
//		r.ID,
//		r.Report.District,
//		r.Report.Facility,
//		r.Report.Month,
//		r.Report.Year,
//		ed,
//		referrals,
//		otherServices,
//		capacityBuilding,
//		ccp,
//		r.Report.HealthEducator,
//		r.CreatedAt,
//		r.CreatedBy)
//	if err != nil {
//		return fmt.Errorf("error inserting new monthly health educator report to the database: %w", err)
//	}
//	return nil
//}
//
//// List gets all Monthly Reports from the database.
//func (e EdMonthlyReport) List(year int) ([]MonthlyReportRecord, error) {
//	stmt := `
//	SELECT
//	       id, district, facility, month, year, health_education, referrals, other_services, capacity_building,
//	       community_platform_project, health_educator, created_at, created_by, updated_at, updated_by
//	FROM
//	     monthly_health_educator_report
//	WHERE
//	      year = $1
//    ORDER BY month;
//`
//	rows, err := e.Query(stmt, year)
//	defer rows.Close()
//	if err != nil {
//		return nil, fmt.Errorf("error retrieving monthly educator reports from the database: %w", err)
//	}
//
//	var reports []MonthlyReportRecord
//	for rows.Next() {
//		var report MonthlyReportRecord
//		var updatedBy sql.NullString
//		err := rows.Scan(
//			&report.ID,
//			&report.Report.District,
//			&report.Report.Facility,
//			&report.Report.Month,
//			&report.Report.Year,
//			&report.Report.HealthEducation,
//			&report.Report.Referrals,
//			&report.Report.OtherServices,
//			&report.Report.CapacityBuilding,
//			&report.Report.CommunityPlatformProject,
//			&report.Report.HealthEducator,
//			&report.CreatedAt,
//			&report.CreatedBy,
//			&report.UpdatedAt,
//			&updatedBy)
//		if err != nil {
//			return nil, fmt.Errorf("error scanning monthly education reportss: %w", err)
//		}
//		if updatedBy.Valid {
//			report.UpdatedBy = updatedBy.String
//		}
//		reports = append(reports, report)
//	}
//
//	return reports, nil
//}
//
//// Update updates a monthly report.
//func (e EdMonthlyReport) Update(r MonthlyReportRecord) error {
//	stmt := `
//	UPDATE monthly_health_educator_report
//	SET facility=$2, year=$3, month=$4, district=$5, health_educator=$6, health_education=$7,
//	    referrals=$8, other_services=$9, community_platform_project=$10, capacity_building=$11,
//		updated_by=$12, updated_at=$13
//	WHERE id = $1;
//`
//	_, err := e.Exec(stmt,
//		r.ID,
//		r.Report.Facility,
//		r.Report.Year,
//		r.Report.Month,
//		r.Report.District,
//		r.Report.HealthEducator,
//		r.Report.HealthEducation,
//		r.Report.Referrals,
//		r.Report.OtherServices,
//		r.Report.CommunityPlatformProject,
//		r.Report.CapacityBuilding,
//		r.UpdatedBy,
//		r.UpdatedAt)
//	if err != nil {
//		return fmt.Errorf("error updating monthly_health_educator_report: %w", err)
//	}
//	return nil
//}
//
//// GetById retrieves a monthly report that has the specified id.
//func (e EdMonthlyReport) GetById(id string) (*MonthlyReportRecord, error) {
//	stmt := `
//	SELECT
//	       id, facility, health_educator, district, month, year, health_education, referrals, capacity_building,
//	       other_services, community_platform_project, created_at, created_by, updated_at, updated_by
//	FROM monthly_health_educator_report
//	WHERE id = $1
//
//`
//	row := e.QueryRow(stmt, id)
//	var report MonthlyReportRecord
//	err := row.Scan(
//		&report.ID,
//		&report.Report.Facility,
//		&report.Report.HealthEducator,
//		&report.Report.District,
//		&report.Report.Month,
//		&report.Report.Year,
//		&report.Report.HealthEducation,
//		&report.Report.Referrals,
//		&report.Report.CapacityBuilding,
//		&report.Report.OtherServices,
//		&report.Report.CommunityPlatformProject,
//		&report.CreatedAt,
//		&report.CreatedBy,
//		&report.UpdatedAt,
//		&report.UpdatedBy)
//
//	switch err {
//	case sql.ErrNoRows:
//		return nil, nil
//	case nil:
//		return &report, nil
//	default:
//		return nil, fmt.Errorf("error retrieving health educator monthly report form database: %w", err)
//	}
//}
