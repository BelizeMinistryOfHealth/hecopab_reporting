package healthEducator

import (
	"database/sql/driver"
	"encoding/json"
	"errors"
	"time"

	"moh.gov.bz/hecopab/reporting/internal/models"
)

// MonthlyReport is the representation without the database specific fields (ID, UpdatedAt, etc...)
type MonthlyReport struct {
	HealthEducator  string          `json:"healthEducator"`
	District        string          `json:"district"`
	Facility        string          `json:"facility"`
	Month           int             `json:"month"`
	Year            int             `json:"year"`
	HealthEducation HealthEducation `json:"healthEducation"`
}

// HealthEducation represents the fields for the health education monthly report.
type HealthEducation struct {
	EducationPromotionInSchools               models.GeographicalVectors `json:"healthEducationAndPromotionInSchools"`
	EducationPromotionInHealthFacility        models.GeographicalVectors `json:"healthEducationAndPromotionSessionsInHospitalAndHealthCenter"`
	EducationSessionsInCommunity              models.GeographicalVectors `json:"healthEducationSessionsWithinTheCommunity"`
	SupervisoryVisitsToCommunityHealthWorkers models.GeographicalVectors `json:"supervisoryVisitsToCommunityHealthWorkers"`
	HomeVisits                                models.GeographicalVectors `json:"homeVisits"`
	HealthFairs                               models.GeographicalVectors `json:"healthFairs"`
	WellnessDayActivities                     models.GeographicalVectors `json:"WellnessDayActivities"`
	CleanupCampaigns                          models.GeographicalVectors `json:"cleanupCampaigns"`
	EducationConcerningDiabetes               models.GeographicalVectors `json:"healthEducationActivitiesConcerningDiabetes"`
	EducationConcerningTobaccoCessation       models.GeographicalVectors `json:"healthEducationSessionsConcerningTobaccoCessation"`
}

// Value makes the HealthEducation struct implement the driver.Valuer interface.
// This method simply returns the JSON-encoded representations of the struct.
func (e HealthEducation) Value() (driver.Value, error) {
	return json.Marshal(e)
}

// Scan makes the HealthEducation struct implement the sql.Scanner interface. This method
// simply decodes a JSON-encoded value into struct fields.
func (e *HealthEducation) Scan(value interface{}) error {
	b, ok := value.([]byte)
	if !ok {
		return errors.New("type assertion to []byte failed")
	}
	return json.Unmarshal(b, &e)
}

// MonthlyReportRecord is the database representation of the Monthly Report.
type MonthlyReportRecord struct {
	ID        string        `json:"id"`
	Report    MonthlyReport `json:"monthlyReport"`
	CreatedBy string        `json:"createdBy"`
	CreatedAt time.Time     `json:"createdAt"`
	UpdatedBy string        `json:"updatedBy"`
	UpdatedAt *time.Time    `josn:"updatedAt"`
}
