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
	HealthEducator           string                   `json:"healthEducator"`
	District                 string                   `json:"district"`
	Facility                 string                   `json:"facility"`
	Month                    int                      `json:"month"`
	Year                     int                      `json:"year"`
	HealthEducation          HealthEducation          `json:"healthEducation"`
	Referrals                Referrals                `json:"referrals"`
	OtherServices            OtherServices            `json:"otherServices"`
	CapacityBuilding         CapacityBuilding         `json:"capacityBuilding"`
	CommunityPlatformProject CommunityPlatformProject `json:"communityPlatformProject"`
}

// HealthEducation represents the fields for the health education monthly report.
type HealthEducation struct {
	EducationPromotionInSchools               models.GeographicalVectors `json:"healthEducationAndPromotionInSchools"`
	EducationPromotionInHealthFacility        models.GeographicalVectors `json:"healthEducationAndPromotionSessionsInHospitalAndHealthCenter"`
	EducationSessionsInCommunity              models.GeographicalVectors `json:"healthEducationSessionsWithinTheCommunity"`
	SupervisoryVisitsToCommunityHealthWorkers models.GeographicalVectors `json:"supervisoryVisitsToCommunityHealthWorkers"`
	HomeVisits                                models.GeographicalVectors `json:"homeVisits"`
	HealthFairs                               models.GeographicalVectors `json:"healthFairs"`
	WellnessDayActivities                     models.GeographicalVectors `json:"wellnessDayActivities"`
	CleanupCampaigns                          models.GeographicalVectors `json:"cleanupCampaigns"`
	EducationConcerningDiabetes               models.GeographicalVectors `json:"healthEducationActivitiesConcerningDiabetes"`
	EducationConcerningTobaccoCessation       models.GeographicalVectors `json:"healthEducationSessionsConcerningTobaccoCessation"`
}

type Referrals struct {
	FamilyPlanning          models.GeographicalVectors `json:"familyPlanning"`
	PreconceptionCare       models.GeographicalVectors `json:"preconceptionCare"`
	AntenatalCare           models.GeographicalVectors `json:"antenatalCare"`
	PostnatalCare           models.GeographicalVectors `json:"postnatalCare"`
	NewbornCare             models.GeographicalVectors `json:"newbornCare"`
	CervicalCancerScreening models.GeographicalVectors `json:"cervicalCancerScreening"`
}

type OtherServices struct {
	OrsZincDistributed models.GeographicalVectors `json:"orsZincDistributed"`
	RapidPregnancyTest models.GeographicalVectors `json:"rapidPregnancyTest"`
	GlucoseMonitoring  models.GeographicalVectors `json:"glucoseMonitoring"`
	Hyperglycemia      models.GeographicalVectors `json:"hyperglycemia"`
	Hypoglycemia       models.GeographicalVectors `json:"hypoglycemia"`
	BloodPressure      models.GeographicalVectors `json:"bloodPressure"`
	Hypertension       models.GeographicalVectors `json:"hypertension"`
	Hypotension        models.GeographicalVectors `json:"hypotension"`
	FirstAid           models.GeographicalVectors `json:"firstAid"`
	Deaths             models.GeographicalVectors `json:"deaths"`
	Births             models.GeographicalVectors `json:"births"`
}

type CapacityBuilding struct {
	NewCommunityHealthWorkersRecruited models.GeographicalVectors `json:"newCommunityHealthWorkersRecruited"`
	CommunityHealthWorkersTrained      models.GeographicalVectors `json:"communityHealthWorkersTrained"`
	WorkshopsForCommunityHealthWorkers models.GeographicalVectors `json:"workshopsForCommunityHealthWorkers"`
	WorkshopsForHealthEducators        models.GeographicalVectors `json:"workshopsForHealthEducators"`
	ChwsInAttendanceAtMonthlyMeeting   models.GeographicalVectors `json:"chwsInAttendanceAtMonthlyMeeting"`
	HealthCommitteesFormed             models.GeographicalVectors `json:"healthCommitteesFormed"`
	HealthCommitteesTrained            models.GeographicalVectors `json:"healthCommitteesTrained"`
}

type CommunityPlatformProject struct {
	NumberOfCommunitiesUnderCp          models.GeographicalVectors `json:"numberOfCommunitiesUnderCp"`
	TotalNumberOfCommunitiesConfirmed   models.GeographicalVectors `json:"totalNumberOfCommunitiesConfirmed"`
	NumberOfMeetingsOrTrainingConducted models.GeographicalVectors `json:"numberOfMeetingsOrTrainingConducted"`
	ChallengesAndOrIssuesIdentified     models.GeographicalVectors `json:"challengesAndOrIssuesIdentified"`
	Accomplishments                     models.GeographicalVectors `json:"accomplishments"`
	ExternalAssistanceNeeded            models.GeographicalVectors `json:"externalAssistanceNeeded"`
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

// Value makes the Referrals struct implement the driver.Valuer interface.
// This method simply returns the JSON-encoded representations of the struct.
func (e Referrals) Value() (driver.Value, error) {
	return json.Marshal(e)
}

// Scan makes the Referrals struct implement the sql.Scanner interface. This method
// simply decodes a JSON-encoded value into struct fields.
func (e *Referrals) Scan(value interface{}) error {
	b, ok := value.([]byte)
	if !ok {
		return errors.New("type assertion to []byte failed")
	}
	return json.Unmarshal(b, &e)
}

// Value makes the OtherServices struct implement the driver.Valuer interface.
// This method simply returns the JSON-encoded representations of the struct.
func (e OtherServices) Value() (driver.Value, error) {
	return json.Marshal(e)
}

// Scan makes the OtherServices struct implement the sql.Scanner interface. This method
// simply decodes a JSON-encoded value into struct fields.
func (e *OtherServices) Scan(value interface{}) error {
	b, ok := value.([]byte)
	if !ok {
		return errors.New("type assertion to []byte failed")
	}
	return json.Unmarshal(b, &e)
}

// Value makes the CapacityBuilding struct implement the driver.Valuer interface.
// This method simply returns the JSON-encoded representations of the struct.
func (e CapacityBuilding) Value() (driver.Value, error) {
	return json.Marshal(e)
}

// Scan makes the CapacityBuilding struct implement the sql.Scanner interface. This method
// simply decodes a JSON-encoded value into struct fields.
func (e *CapacityBuilding) Scan(value interface{}) error {
	b, ok := value.([]byte)
	if !ok {
		return errors.New("type assertion to []byte failed")
	}
	return json.Unmarshal(b, &e)
}

// Value makes the CommunityPlatformProject struct implement the driver.Valuer interface.
// This method simply returns the JSON-encoded representations of the struct.
func (e CommunityPlatformProject) Value() (driver.Value, error) {
	return json.Marshal(e)
}

// Scan makes the CommunityPlatformProject struct implement the sql.Scanner interface. This method
// simply decodes a JSON-encoded value into struct fields.
func (e *CommunityPlatformProject) Scan(value interface{}) error {
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
	UpdatedAt *time.Time    `json:"updatedAt"`
}
