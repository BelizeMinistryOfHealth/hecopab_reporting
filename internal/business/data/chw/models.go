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
	OneToFour              models.GenderCategories `json:"oneToFour"`
	FiveToNine             models.GenderCategories `json:"fiveToNine"`
	TenToFourteen          models.GenderCategories `json:"tenToFourteen"`
	FifteenToNineteen      models.GenderCategories `json:"fifteenToNineteen"`
	TwentyToTwentyFour     models.GenderCategories `json:"twentyToTwentyFour"`
	TwentyFiveToTwentyNine models.GenderCategories `json:"twentyFiveToTwentyNine"`
	ThirtyToThirtyFour     models.GenderCategories `json:"thirtyToThirtyFour"`
	ThirtyFiveToThirtyNine models.GenderCategories `json:"thirtyFiveToThirtyNine"`
	FortyToFortyFour       models.GenderCategories `json:"fortyToFortyFour"`
	FortyFiveToFortyNine   models.GenderCategories `json:"fortyFiveToFortyNine"`
	FiftyToFiftyFour       models.GenderCategories `json:"fiftyToFiftyFour"`
	FiftyFiveToFiftyNine   models.GenderCategories `json:"fiftyFiveToFiftyNine"`
	SixtyToSixtyFour       models.GenderCategories `json:"sixtySixtyFour"`
	SixtyFiveAndOver       models.GenderCategories `json:"sixtyFiveOrMore"`
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
	e.OneToFour.CalculateTotal()
	e.FiveToNine.CalculateTotal()
	e.TenToFourteen.CalculateTotal()
	e.FifteenToNineteen.CalculateTotal()
	e.TwentyToTwentyFour.CalculateTotal()
	e.TwentyFiveToTwentyNine.CalculateTotal()
	e.ThirtyToThirtyFour.CalculateTotal()
	e.ThirtyFiveToThirtyNine.CalculateTotal()
	e.FortyToFortyFour.CalculateTotal()
	e.FortyFiveToFortyNine.CalculateTotal()
	e.FiftyToFiftyFour.CalculateTotal()
	e.FiftyFiveToFiftyNine.CalculateTotal()
	e.SixtyToSixtyFour.CalculateTotal()
	e.SixtyFiveAndOver.CalculateTotal()

	return nil
}

// ChwMonthlyReport is the community health worker's monthly report
type ChwMonthlyReport struct {
	HealthEducator        string                  `json:"healthEducator"`
	RuralNurse            string                  `json:"ruralNurse"`
	CommunityHealthWorker string                  `json:"chw"`
	District              string                  `json:"district"`
	Facility              string                  `json:"facility"`
	Month                 int                     `json:"month"`
	Year                  int                     `json:"year"`
	PatientsSeen          Tallies                 `json:"patientsSeen"`
	Deaths                Tallies                 `json:"deaths"`
	Complaints            Tallies                 `json:"complaints"`
	DutiesPerformed       Tallies                 `json:"dutiesPreformed"`
	Births                models.GenderCategories `json:"births"`
}

//ChwMonthlyReportRecord represents the persisted entity that stores a ChwMonthlyReport
type ChwMonthlyReportRecord struct {
	ID        string           `json:"id"`
	Report    ChwMonthlyReport `json:"report"`
	CreatedBy string           `json:"createdBy"`
	CreatedAt time.Time        `json:"createdAt"`
	UpdatedBy string           `json:"updatedBy"`
	UpdatedAt *time.Time       `json:"updatedAt"`
}
