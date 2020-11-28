package chw

import (
	"fmt"
	"os"
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
	Port:     "5432",
	Sslmode:  "disable",
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
	ClearTable("monthly_chw_report", *db)
	os.Exit(exitVal)
}

func TestChwReport_Create(t *testing.T) {
	db, err := db.NewConnection(&cnf)
	if err != nil {
		t.Fatalf("error opening database connection: %+v", err)
	}
	report := ChwMonthlyReport{
		HealthEducator:        "Jon Jones",
		RuralNurse:            "Jane Janes",
		CommunityHealthWorker: "Jeff Jeffs",
		District:              "Belize",
		Facility:              "",
		Month:                 1,
		Year:                  2020,
		PatientsSeen:          Tallies{},
		Deaths: Tallies{
			OneToFour: models.GenderCategories{
				Male:   10,
				Female: 6,
			},
			FiveToNine:             models.GenderCategories{},
			TenToFourteen:          models.GenderCategories{},
			FifteenToNineteen:      models.GenderCategories{},
			TwentyToTwentyFour:     models.GenderCategories{},
			TwentyFiveToTwentyNine: models.GenderCategories{},
			ThirtyToThirtyFour:     models.GenderCategories{},
			ThirtyFiveToThirtyNine: models.GenderCategories{},
			FortyToFortyFour:       models.GenderCategories{},
			FortyFiveToFortyNine:   models.GenderCategories{},
			FiftyToFiftyFour:       models.GenderCategories{},
			FiftyFiveToFiftyNine:   models.GenderCategories{},
			SixtyToSixtyFour:       models.GenderCategories{},
			SixtyFiveAndOver:       models.GenderCategories{},
		},
		Complaints:      Tallies{},
		DutiesPerformed: Tallies{},
		Births: models.GenderCategories{
			Male:   10,
			Female: 15,
		},
	}
	record := ChwMonthlyReportRecord{
		ID:        uuid.New().String(),
		Report:    report,
		CreatedBy: "editor@health.com",
		CreatedAt: time.Now(),
	}
	chw := New(db.DB)
	err = chw.Create(record)
	if err != nil {
		t.Fatalf("failed to create new chw report: %+v", err)
	}

	// Verify by retrieving the record
	savedReport, err := chw.GetById(record.ID)
	if err != nil {
		t.Fatalf("error retrieving report: %+v", err)
	}

	if savedReport.Report.Births.Male != 10 {
		t.Errorf("want 10, got %d", savedReport.Report.Births.Male)
	}
	if savedReport.Report.Births.Female != 15 {
		t.Errorf("want 15, got %d", savedReport.Report.Births.Female)
	}
	if savedReport.Report.Births.Total != 25 {
		t.Errorf("want 25, got %d", savedReport.Report.Births.Total)
	}
	if savedReport.Report.Deaths.OneToFour.Male != 10 {
		t.Errorf("want 10, got %d", savedReport.Report.Deaths.OneToFour.Male)
	}
	if savedReport.Report.Deaths.OneToFour.Female != 6 {
		t.Errorf("want 6, got %d", savedReport.Report.Deaths.OneToFour.Female)
	}
	if savedReport.Report.Deaths.OneToFour.Total != 16 {
		t.Errorf("want 16, got %d", savedReport.Report.Deaths.OneToFour.Total)
	}
}

func TestChwReport_List(t *testing.T) {
	db, err := db.NewConnection(&cnf)
	if err != nil {
		t.Fatalf("error opening database connection: %+v", err)
	}
	report := ChwMonthlyReport{
		HealthEducator:        "Jon Jones",
		RuralNurse:            "Jane Janes",
		CommunityHealthWorker: "Jeff Jeffs",
		District:              "Belize",
		Facility:              "",
		Month:                 1,
		Year:                  2020,
		PatientsSeen:          Tallies{},
		Deaths: Tallies{
			OneToFour: models.GenderCategories{
				Male:   10,
				Female: 6,
			},
			FiveToNine:             models.GenderCategories{},
			TenToFourteen:          models.GenderCategories{},
			FifteenToNineteen:      models.GenderCategories{},
			TwentyToTwentyFour:     models.GenderCategories{},
			TwentyFiveToTwentyNine: models.GenderCategories{},
			ThirtyToThirtyFour:     models.GenderCategories{},
			ThirtyFiveToThirtyNine: models.GenderCategories{},
			FortyToFortyFour:       models.GenderCategories{},
			FortyFiveToFortyNine:   models.GenderCategories{},
			FiftyToFiftyFour:       models.GenderCategories{},
			FiftyFiveToFiftyNine:   models.GenderCategories{},
			SixtyToSixtyFour:       models.GenderCategories{},
			SixtyFiveAndOver:       models.GenderCategories{},
		},
		Complaints:      Tallies{},
		DutiesPerformed: Tallies{},
		Births: models.GenderCategories{
			Male:   10,
			Female: 15,
		},
	}
	record := ChwMonthlyReportRecord{
		ID:        uuid.New().String(),
		Report:    report,
		CreatedBy: "editor@health.com",
		CreatedAt: time.Now(),
	}
	chw := New(db.DB)
	err = chw.Create(record)
	if err != nil {
		t.Fatalf("failed to create new chw report: %+v", err)
	}

	// Verify by retrieving the record
	reports, err := chw.List(2020)
	if err != nil {
		t.Errorf("error getting a list of chw reports: %+v", err)
	}

	if len(reports) == 0 {
		t.Errorf("want > 0, got %d", len(reports))
	}

}

func TestChwReport_Update(t *testing.T) {
	db, err := db.NewConnection(&cnf)
	if err != nil {
		t.Fatalf("error opening database connection: %+v", err)
	}
	report := ChwMonthlyReport{
		HealthEducator:        "Jon Jones",
		RuralNurse:            "Jane Janes",
		CommunityHealthWorker: "Jeff Jeffs",
		District:              "Belize",
		Facility:              "",
		Month:                 1,
		Year:                  2020,
		PatientsSeen:          Tallies{},
		Deaths: Tallies{
			OneToFour: models.GenderCategories{
				Male:   10,
				Female: 6,
			},
			FiveToNine:             models.GenderCategories{},
			TenToFourteen:          models.GenderCategories{},
			FifteenToNineteen:      models.GenderCategories{},
			TwentyToTwentyFour:     models.GenderCategories{},
			TwentyFiveToTwentyNine: models.GenderCategories{},
			ThirtyToThirtyFour:     models.GenderCategories{},
			ThirtyFiveToThirtyNine: models.GenderCategories{},
			FortyToFortyFour:       models.GenderCategories{},
			FortyFiveToFortyNine:   models.GenderCategories{},
			FiftyToFiftyFour:       models.GenderCategories{},
			FiftyFiveToFiftyNine:   models.GenderCategories{},
			SixtyToSixtyFour:       models.GenderCategories{},
			SixtyFiveAndOver:       models.GenderCategories{},
		},
		Complaints:      Tallies{},
		DutiesPerformed: Tallies{},
		Births: models.GenderCategories{
			Male:   10,
			Female: 15,
		},
	}
	record := ChwMonthlyReportRecord{
		ID:        uuid.New().String(),
		Report:    report,
		CreatedBy: "editor@health.com",
		CreatedAt: time.Now(),
	}
	chw := New(db.DB)
	err = chw.Create(record)
	if err != nil {
		t.Fatalf("failed to create new chw report: %+v", err)
	}

	//Update the report
	record.Report.Complaints = Tallies{
		OneToFour:         models.GenderCategories{},
		FiveToNine:        models.GenderCategories{},
		TenToFourteen:     models.GenderCategories{},
		FifteenToNineteen: models.GenderCategories{},
		TwentyToTwentyFour: models.GenderCategories{
			Male:   20,
			Female: 10,
		},
		TwentyFiveToTwentyNine: models.GenderCategories{
			Male:   10,
			Female: 20,
		},
		ThirtyToThirtyFour:     models.GenderCategories{},
		ThirtyFiveToThirtyNine: models.GenderCategories{},
		FortyToFortyFour:       models.GenderCategories{},
		FortyFiveToFortyNine:   models.GenderCategories{},
		FiftyToFiftyFour:       models.GenderCategories{},
		FiftyFiveToFiftyNine:   models.GenderCategories{},
		SixtyToSixtyFour:       models.GenderCategories{},
		SixtyFiveAndOver:       models.GenderCategories{},
	}
	record.UpdatedBy = "chw@moh.gov.bz"
	today := time.Now()
	record.UpdatedAt = &today
	err = chw.Update(record)
	if err != nil {
		t.Fatalf("failed to updated monthly report: %+v", err)
	}

	r, err := chw.GetById(record.ID)
	if err != nil {
		t.Fatalf("failed to retreive teh updated monthly report: %+v", err)
	}
	if r.UpdatedBy != record.UpdatedBy {
		t.Errorf("want: %s got: %s", record.UpdatedBy, r.UpdatedBy)
	}
	if r.Report.Complaints.TwentyToTwentyFour.Male != record.Report.Complaints.TwentyToTwentyFour.Male {
		t.Errorf("want: %+v got: %+v",
			record.Report.Complaints.TwentyToTwentyFour.Male,
			r.Report.Complaints.TwentyToTwentyFour.Male)
	}
	if r.Report.Complaints.TwentyToTwentyFour.Total != record.Report.Complaints.TwentyToTwentyFour.Male+record.Report.Complaints.TwentyToTwentyFour.Female {
		t.Errorf("want: %+v got: %+v",
			record.Report.Complaints.TwentyToTwentyFour.Total,
			r.Report.Complaints.TwentyToTwentyFour.Male+r.Report.Complaints.TwentyToTwentyFour.Female)
	}
}
