package chw

import (
	"context"
	log "github.com/sirupsen/logrus"
	"moh.gov.bz/hecopab/reporting/internal/models"
	"os"
	"testing"
	"time"

	_ "github.com/lib/pq"

	"moh.gov.bz/hecopab/reporting/internal/db"
)

var ctx = context.Background()

func TestChwReport_Create(t *testing.T) {
	patientsSeen := Tallies{
		OneToFour:     models.GenderCategories{},
		FiveToNine:    models.GenderCategories{},
		TenToFourteen: models.GenderCategories{},
		FifteenToNineteen: models.GenderCategories{
			Male:   20,
			Female: 32,
		},
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
	}

	patientsSeen.CalculateTotal()

	report := MonthlyReport{
		HealthEducator:        "Health Educator",
		RuralNurse:            "Nurse",
		CommunityHealthWorker: "CHW",
		District:              "Belize",
		Facility:              "VCT",
		Month:                 1,
		Year:                  2021,
		PatientsSeen:          patientsSeen,
		Deaths:                Tallies{},
		Complaints:            Complaints{},
		DutiesPerformed:       DutiesPerformed{},
		HealthEdSessions:      HealthEdSession{},
		Meetings:              Meetings{},
		Births:                models.GenderCategories{},
	}
	m := MonthlyReportRecord{
		ID:        "2131231",
		Report:    report,
		CreatedBy: "roberto.guerra@openstep.net",
		CreatedAt: time.Now(),
		UpdatedBy: "",
		UpdatedAt: nil,
	}

	if m.Report.PatientsSeen.FifteenToNineteen.Female != 32 {
		t.Errorf("want: 32, got: 0")
	}

	if m.Report.PatientsSeen.FifteenToNineteen.Total != 52 {
		t.Errorf("want: 52, got: %d", m.Report.PatientsSeen.FifteenToNineteen.Total)
	}

	projectId := os.Getenv("PROJECT_ID")
	firestoreClient, err := db.NewFirestore(ctx, projectId)
	if err != nil {
		log.Fatalf("failed to connect to firestore: %v", err)
		os.Exit(-1)
	}
	reporter := New(firestoreClient)
	createErr := reporter.Create(ctx, m)
	if createErr != nil {
		t.Errorf("Create() failed: %v", createErr)
	}
}

func TestChwReport_List(t *testing.T) {

}

func TestChwReport_Update(t *testing.T) {
}
