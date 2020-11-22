package db

import (
	"fmt"
	"os"
	"testing"
	"time"

	"github.com/google/uuid"
	_ "github.com/lib/pq"

	"moh.gov.bz/hecopab/reporting/internal/config"
	"moh.gov.bz/hecopab/reporting/internal/models"
)

var cnf = config.DbConf{
	Username: "postgres",
	Password: "password",
	Database: "hecopab",
	Host:     "localhost",
}

func ClearTable(table string, db Db) error {
	stmt := fmt.Sprintf("DELETE FROM %s", table)
	_, err := db.Exec(stmt)
	if err != nil {
		return fmt.Errorf("error deleting table(%s) content: %+v", table, err)
	}
	return nil
}

func TestMain(m *testing.M) {
	exitVal := m.Run()
	db, _ := NewConnection(&cnf)
	ClearTable("monthly_health_educator_report", *db)
	os.Exit(exitVal)
}

func TestDb_CreateEducatorMonthlyReport(t *testing.T) {
	db, err := NewConnection(&cnf)
	if err != nil {
		t.Fatalf("error opening connection to database: %+v", err)
	}
	report := models.MonthlyReportRecord{
		ID: uuid.New().String(),
		Report: models.MonthlyReport{
			District:       "Belize",
			Facility:       "Rural Area 1",
			HealthEducator: "Jane Educator",
			Month:          11,
			Year:           2020,
			HealthEducation: models.HealthEducation{
				EducationPromotionInSchools: models.GeographicalVectors{
					Rural: 10,
					Urban: 0,
				},
				EducationPromotionInHealthFacility: models.GeographicalVectors{
					Rural: 20,
					Urban: 0,
				},
				EducationSessionsInCommunity: models.GeographicalVectors{
					Rural: 5,
					Urban: 0,
				},
				HomeVisits: models.GeographicalVectors{
					Rural: 10,
					Urban: 0,
				},
				SupervisoryVisitsToCommunityHealthWorkers: models.GeographicalVectors{
					Rural: 0,
					Urban: 0,
				},
				HealthFairs: models.GeographicalVectors{
					Rural: 0,
					Urban: 1,
				},
				WellnessDayActivities: models.GeographicalVectors{
					Rural: 0,
					Urban: 0,
				},
				CleanupCampaigns: models.GeographicalVectors{
					Rural: 0,
					Urban: 0,
				},
				EducationConcerningDiabetes: models.GeographicalVectors{
					Rural: 2,
					Urban: 0,
				},
				EducationConcerningTobaccoCessation: models.GeographicalVectors{
					Rural: 0,
					Urban: 0,
				},
			},
		},
		CreatedBy: "test@mail.com",
		CreatedAt: time.Now(),
		UpdatedBy: "",
		UpdatedAt: nil,
	}

	err = db.CreateEducatorMonthlyReport(report)
	if err != nil {
		t.Fatalf("failed to persist a monthly report: %+v", err)
	}
}

func TestDb_ListMonthlyEducatorReport(t *testing.T) {
	db, err := NewConnection(&cnf)
	if err != nil {
		t.Fatalf("error opening connection to database: %+v", err)
	}
	report := models.MonthlyReportRecord{
		ID: uuid.New().String(),
		Report: models.MonthlyReport{
			District:       "Belize",
			Facility:       "Rural Area 1",
			HealthEducator: "Jane Educator",
			Month:          11,
			Year:           2020,
			HealthEducation: models.HealthEducation{
				EducationPromotionInSchools: models.GeographicalVectors{
					Rural: 10,
					Urban: 0,
				},
				EducationPromotionInHealthFacility: models.GeographicalVectors{
					Rural: 20,
					Urban: 0,
				},
				EducationSessionsInCommunity: models.GeographicalVectors{
					Rural: 5,
					Urban: 0,
				},
				HomeVisits: models.GeographicalVectors{
					Rural: 10,
					Urban: 0,
				},
				SupervisoryVisitsToCommunityHealthWorkers: models.GeographicalVectors{
					Rural: 0,
					Urban: 0,
				},
				HealthFairs: models.GeographicalVectors{
					Rural: 0,
					Urban: 1,
				},
				WellnessDayActivities: models.GeographicalVectors{
					Rural: 0,
					Urban: 0,
				},
				CleanupCampaigns: models.GeographicalVectors{
					Rural: 0,
					Urban: 0,
				},
				EducationConcerningDiabetes: models.GeographicalVectors{
					Rural: 2,
					Urban: 0,
				},
				EducationConcerningTobaccoCessation: models.GeographicalVectors{
					Rural: 0,
					Urban: 0,
				},
			},
		},
		CreatedBy: "test@mail.com",
		CreatedAt: time.Now(),
		UpdatedBy: "",
		UpdatedAt: nil,
	}
	err = db.CreateEducatorMonthlyReport(report)
	if err != nil {
		t.Fatalf("failed to persist a monthly report: %+v", err)
	}

	reports, err := db.ListMonthlyEducatorReport(2020)
	if err != nil {
		t.Fatalf("failed to retrieve educator reports: %+v", err)
	}
	if reports == nil {
		t.Error("wanted a non empty list of reports but got nil")
	}

	if len(reports) == 0 {
		t.Error("wanted a non -empty list of reports but got an empty list")
	}

}
