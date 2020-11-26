package healthEducator

import (
	"fmt"
	"os"
	"reflect"
	"testing"
	"time"

	"github.com/google/uuid"
	_ "github.com/lib/pq"

	"moh.gov.bz/hecopab/reporting/internal/config"
	"moh.gov.bz/hecopab/reporting/internal/db"
	"moh.gov.bz/hecopab/reporting/internal/models"
)

var cnf = config.DbConf{
	Username: "postgres",
	Password: "password",
	Database: "hecopab",
	Host:     "localhost",
}

func ClearTable(table string, db db.Db) error {
	stmt := fmt.Sprintf("DELETE FROM %s", table)
	_, err := db.Exec(stmt)
	if err != nil {
		return fmt.Errorf("error deleting table(%s) content: %+v", table, err)
	}
	return nil
}

func TestMain(m *testing.M) {
	exitVal := m.Run()
	db, _ := db.NewConnection(&cnf)
	ClearTable("monthly_health_educator_report", *db)
	os.Exit(exitVal)
}

func TestEdMonthlyReport_Create(t *testing.T) {
	db, err := db.NewConnection(&cnf)
	if err != nil {
		t.Fatalf("error opening connection to database: %+v", err)
	}
	report := MonthlyReportRecord{
		ID: uuid.New().String(),
		Report: MonthlyReport{
			District:       "Belize",
			Facility:       "Rural Area 1",
			HealthEducator: "Jane Educator",
			Month:          11,
			Year:           2020,
			HealthEducation: HealthEducation{
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
			Referrals:                Referrals{},
			OtherServices:            OtherServices{},
			CommunityPlatformProject: CommunityPlatformProject{},
			CapacityBuilding:         CapacityBuilding{},
		},
		CreatedBy: "test@mail.com",
		CreatedAt: time.Now(),
		UpdatedBy: "",
		UpdatedAt: nil,
	}
	ed := New(db.DB)
	err = ed.Create(report)
	if err != nil {
		t.Fatalf("failed to persist a monthly report: %+v", err)
	}
}

func TestEdMonthlyReport_List(t *testing.T) {
	db, err := db.NewConnection(&cnf)
	if err != nil {
		t.Fatalf("error opening connection to database: %+v", err)
	}
	report := MonthlyReportRecord{
		ID: uuid.New().String(),
		Report: MonthlyReport{
			District:       "Belize",
			Facility:       "Rural Area 1",
			HealthEducator: "Jane Educator",
			Month:          11,
			Year:           2020,
			HealthEducation: HealthEducation{
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
			Referrals: Referrals{
				FamilyPlanning:          models.GeographicalVectors{},
				PreconceptionCare:       models.GeographicalVectors{},
				AntenatalCare:           models.GeographicalVectors{},
				PostnatalCare:           models.GeographicalVectors{},
				NewbornCare:             models.GeographicalVectors{},
				CervicalCancerScreening: models.GeographicalVectors{},
			},
			OtherServices:            OtherServices{},
			CommunityPlatformProject: CommunityPlatformProject{},
			CapacityBuilding:         CapacityBuilding{},
		},
		CreatedBy: "test@mail.com",
		CreatedAt: time.Now(),
		UpdatedBy: "",
		UpdatedAt: nil,
	}
	ed := New(db.DB)
	err = ed.Create(report)
	if err != nil {
		t.Fatalf("failed to persist a monthly report: %+v", err)
	}

	reports, err := ed.List(2020)
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

func TestEdMonthlyReport_Update(t *testing.T) {
	db, err := db.NewConnection(&cnf)
	if err != nil {
		t.Fatalf("error opening connection to database: %+v", err)
	}
	report := MonthlyReportRecord{
		ID: uuid.New().String(),
		Report: MonthlyReport{
			District:       "Belize",
			Facility:       "Rural Area 1",
			HealthEducator: "Jane Educator",
			Month:          11,
			Year:           2020,
			HealthEducation: HealthEducation{
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
			Referrals: Referrals{
				FamilyPlanning:          models.GeographicalVectors{},
				PreconceptionCare:       models.GeographicalVectors{},
				AntenatalCare:           models.GeographicalVectors{},
				PostnatalCare:           models.GeographicalVectors{},
				NewbornCare:             models.GeographicalVectors{},
				CervicalCancerScreening: models.GeographicalVectors{},
			},
			OtherServices:            OtherServices{},
			CommunityPlatformProject: CommunityPlatformProject{},
			CapacityBuilding:         CapacityBuilding{},
		},
		CreatedBy: "test@mail.com",
		CreatedAt: time.Now(),
		UpdatedBy: "",
		UpdatedAt: nil,
	}
	ed := New(db.DB)
	err = ed.Create(report)
	if err != nil {
		t.Fatalf("failed to persist a monthly report: %+v", err)
	}

	// Update the report
	report.Report.Referrals = Referrals{
		FamilyPlanning: models.GeographicalVectors{
			Rural: 20,
			Urban: 40,
		},
		PreconceptionCare: models.GeographicalVectors{
			Rural: 50,
			Urban: 70,
		},
		AntenatalCare: models.GeographicalVectors{
			Rural: 60,
			Urban: 70,
		},
		PostnatalCare: models.GeographicalVectors{
			Rural: 30,
			Urban: 80,
		},
		NewbornCare: models.GeographicalVectors{
			Rural: 20,
			Urban: 59,
		},
		CervicalCancerScreening: models.GeographicalVectors{
			Rural: 10,
			Urban: 9,
		},
	}
	report.UpdatedBy = "educator@moh.gov.bz"
	today := time.Now()
	report.UpdatedAt = &today
	err = ed.Update(report)
	if err != nil {
		t.Fatalf("failed to update monthly report: %+v", err)
	}

	r, err := ed.GetById(report.ID)
	if err != nil {
		t.Fatalf("failed to retrieve the updated monthly report: %+v", err)
	}
	if r.UpdatedBy != report.UpdatedBy {
		t.Errorf("want: %s got: %s", report.UpdatedBy, r.UpdatedBy)
	}
	if !reflect.DeepEqual(r.Report.Referrals, report.Report.Referrals) {
		t.Errorf("want: %+v , got: %+v", report.Report.Referrals, r.Report.Referrals)
	}
}
