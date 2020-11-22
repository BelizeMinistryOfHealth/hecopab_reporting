package models

import (
	"database/sql/driver"
	"encoding/json"
	"errors"
	"time"
)

type MonthlyReport struct {
	HealthEducator  string          `json:"healthEducator"`
	District        string          `json:"district"`
	Facility        string          `json:"facility"`
	Month           int             `json:"month"`
	Year            int             `json:"year"`
	HealthEducation HealthEducation `json:"healthEducation"`
}

type HealthEducation struct {
	EducationPromotionInSchools               GeographicalVectors `json:"healthEducationAndPromotionInSchools"`
	EducationPromotionInHealthFacility        GeographicalVectors `json:"healthEducationAndPromotionSessionsInHospitalAndHealthCenter"`
	EducationSessionsInCommunity              GeographicalVectors `json:"healthEducationSessionsWithinTheCommunity"`
	HomeVisits                                GeographicalVectors `json:"homeVisits"`
	SupervisoryVisitsToCommunityHealthWorkers GeographicalVectors `json:"supervisoryVisitsToCommunityHealthWorkers"`
	HealthFairs                               GeographicalVectors `json:"healthFairs"`
	WellnessDayActivities                     GeographicalVectors `json:"WellnessDayActivities"`
	CleanupCampaigns                          GeographicalVectors `json:"cleanupCampaigns"`
	EducationConcerningDiabetes               GeographicalVectors `json:"healthEducationActivitiesConcerningDiabetes"`
	EducationConcerningTobaccoCessation       GeographicalVectors `json:"healthEducationSessionsConcerningTobaccoCessation"`
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

type MonthlyReportRecord struct {
	ID        string        `json:"id"`
	Report    MonthlyReport `json:"monthlyReport"`
	CreatedBy string        `json:"createdBy"`
	CreatedAt time.Time     `json:"createdAt"`
	UpdatedBy string        `json:"updatedBy"`
	UpdatedAt *time.Time    `josn:"updatedAt"`
}
