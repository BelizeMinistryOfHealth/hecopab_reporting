package chw

import (
	"database/sql/driver"
	"encoding/json"
	"errors"
	"time"

	"moh.gov.bz/hecopab/reporting/internal/models"
)

// Tallies holds the tallied numbers for each age group broken down by gender.
type Tallies struct {
	OneToFour              models.GenderCategories `json:"oneToFour" firestore:"oneToFour"`
	FiveToNine             models.GenderCategories `json:"fiveToNine" firestore:"fiveToNine"`
	TenToFourteen          models.GenderCategories `json:"tenToFourteen" firestore:"tenToFourteen"`
	FifteenToNineteen      models.GenderCategories `json:"fifteenToNineteen" firestore:"fifteenToNineteen"`
	TwentyToTwentyFour     models.GenderCategories `json:"twentyToTwentyFour" firestore:"twentyToTwentyFour"`
	TwentyFiveToTwentyNine models.GenderCategories `json:"twentyFiveToTwentyNine" firestore:"twentyFiveToTwentyNine"`
	ThirtyToThirtyFour     models.GenderCategories `json:"thirtyToThirtyFour" firestore:"thirtyToThirtyFour"`
	ThirtyFiveToThirtyNine models.GenderCategories `json:"thirtyFiveToThirtyNine" firestore:"thirtyFiveToThirtyNine"`
	FortyToFortyFour       models.GenderCategories `json:"fortyToFortyFour" firestore:"fortyToFortyFour"`
	FortyFiveToFortyNine   models.GenderCategories `json:"fortyFiveToFortyNine" firestore:"fortyFiveToFortyNine"`
	FiftyToFiftyFour       models.GenderCategories `json:"fiftyToFiftyFour" firestore:"fiftyToFiftyFour"`
	FiftyFiveToFiftyNine   models.GenderCategories `json:"fiftyFiveToFiftyNine" firestore:"fiftyFiveToFiftyNine"`
	SixtyToSixtyFour       models.GenderCategories `json:"sixtyToSixtyFour" firestore:"sixtyToSixtyFour"`
	SixtyFiveAndOver       models.GenderCategories `json:"sixtyFiveOrMore" firestore:"sixtyFiveOrMore"`
}

// AgeGroupCounter is an interface for calculating the sum of the values assigned
// to GenderCategories.
type AgeGroupCounter interface {
	CalculateTotal()
}

// Value implements the driver.Valuer interface. It is used by the sql driver
// to convert a struct to JSON before persisting it.
func (e Tallies) Value() (driver.Value, error) {
	return json.Marshal(e)
}

// Scan implements sql.Scanner. The database driver uses this to decode a JSON-encoded
// value into struct fields. It is used when Scanning a column from the database.
func (e *Tallies) Scan(value interface{}) error {
	b, ok := value.([]byte)
	if !ok {
		return errors.New("type assertion of Tallies to []byte failed")
	}
	err := json.Unmarshal(b, &e)
	if err != nil {
		return err
	}
	e.CalculateTotal()
	return nil
}

// CalculateTotal calculates the total sum for all the age groups
func (t *Tallies) CalculateTotal() {
	t.OneToFour.CalculateTotal()
	t.FiveToNine.CalculateTotal()
	t.TenToFourteen.CalculateTotal()
	t.FifteenToNineteen.CalculateTotal()
	t.TwentyToTwentyFour.CalculateTotal()
	t.TwentyFiveToTwentyNine.CalculateTotal()
	t.ThirtyToThirtyFour.CalculateTotal()
	t.ThirtyFiveToThirtyNine.CalculateTotal()
	t.FortyToFortyFour.CalculateTotal()
	t.FortyFiveToFortyNine.CalculateTotal()
	t.FiftyToFiftyFour.CalculateTotal()
	t.FiftyFiveToFiftyNine.CalculateTotal()
	t.SixtyToSixtyFour.CalculateTotal()
	t.SixtyFiveAndOver.CalculateTotal()
}

// ChwMonthlyReport is the community health worker's monthly report
type MonthlyReport struct {
	HealthEducator        string                  `json:"healthEducator" firestore:"healthEducator"`
	RuralNurse            string                  `json:"ruralNurse" firestore:"ruralNurse"`
	CommunityHealthWorker string                  `json:"chw" firestore:"chw"`
	District              string                  `json:"district" firestore:"district"`
	Facility              string                  `json:"facility" firestore:"facility"`
	Month                 int                     `json:"month" firestore:"month"`
	Year                  int                     `json:"year" firestore:"year"`
	PatientsSeen          Tallies                 `json:"patientsSeen" firestore:"patientsSeen"`
	Deaths                Tallies                 `json:"deaths" firestore:"deaths"`
	Complaints            Complaints              `json:"complaints" firestore:"complaints"`
	DutiesPerformed       DutiesPerformed         `json:"dutiesPerformed" firestore:"dutiesPerformed"`
	HealthEdSessions      HealthEdSession         `json:"healthEdSessions" firestore:"healthEdSessions"`
	Meetings              Meetings                `json:"meetings" firestore:"meetings"`
	Births                models.GenderCategories `json:"births" firestore:"births"`
}

//ChwMonthlyReportRecord represents the persisted entity that stores a ChwMonthlyReport
type MonthlyReportRecord struct {
	ID        string        `json:"id" firestore:"id"`
	Report    MonthlyReport `json:"report" firestore:"report"`
	CreatedBy string        `json:"createdBy" firestore:"createdBy"`
	CreatedAt time.Time     `json:"createdAt" firestore:"createdAt"`
	UpdatedBy string        `json:"updatedBy" firestore:"updatedBy"`
	UpdatedAt *time.Time    `json:"updatedAt" firestore:"updatedAt"`
}
