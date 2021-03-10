package chw

import (
	"database/sql/driver"
	"encoding/json"
	"errors"
	"fmt"
)

type DutiesPerformed struct {
	HomeVisits               Tallies `json:"homeVisits" firestore:"homeVisits"`
	HealthEdAtHome           Tallies `json:"healthEdAtHome" firestore:"healthEdAtHome"`
	HealthEdInSchools        Tallies `json:"healthEdInSchools" firestore:"healthEdInSchools"`
	HealthEdWithGroups       Tallies `json:"healthEdWithGroups" firestore:"healthEdWithGroups"`
	BloodPressureChecks      Tallies `json:"bloodPressureChecks" firestore:"bloodPressureChecks"`
	BloodSugarChecks         Tallies `json:"bloodSugarChecks" firestore:"bloodSugarChecks"`
	PregnancyTest            Tallies `json:"pregnancyTest" firestore:"pregnancyTest"`
	WeightAndHeightCheck     Tallies `json:"weightAndHeightCheck" firestore:"weightAndHeightCheck"`
	OrsDistributed           Tallies `json:"orsDistributed" firestore:"orsDistributed"`
	IncaparinaDistributed    Tallies `json:"incaparinaDistributed" firestore:"incaparinaDistributed"`
	ReferralsGiven           Tallies `json:"referralsGiven" firestore:"referralsGiven"`
	CounterReferralsReceived Tallies `json:"counterReferralsReceived" firestore:"counterReferralsReceived"`
	HealthFairsInCommunity   Tallies `json:"healthFairsInCommunity" firestore:"healthFairsInCommunity"`
	FirstAid                 Tallies `json:"firstAid" firestore:"firstAid"`
	MobileClinicAssistance   Tallies `json:"mobileClinicAssistance" firestore:"mobileClinicAssistance"`
	RabiesCampaign           Tallies `json:"rabiesCampaign" firestore:"rabiesCampaign"`
}

// Value implements driver.Valuer. It is used by the sql driver
// to convert the DutiesPerformed struct to JSON before persisting it.
func (d DutiesPerformed) Value() (driver.Value, error) {
	return json.Marshal(d)
}

// Scan implements sql.Scanner. The database driver uses this to decode a JSON-encoded
// value into struct fields. It is used when Scanning a column from the database.
func (d *DutiesPerformed) Scan(value interface{}) error {
	b, ok := value.([]byte)
	if !ok {
		return errors.New("type assertion of DutiesPerformed to []byte failed")
	}
	err := json.Unmarshal(b, &d)
	if err != nil {
		return fmt.Errorf("failed to unmarshall duties performed: %w", err)
	}

	d.HomeVisits.CalculateTotal()
	d.HealthEdAtHome.CalculateTotal()
	d.HealthEdInSchools.CalculateTotal()
	d.HealthEdWithGroups.CalculateTotal()
	d.BloodPressureChecks.CalculateTotal()
	d.BloodSugarChecks.CalculateTotal()
	d.PregnancyTest.CalculateTotal()
	d.WeightAndHeightCheck.CalculateTotal()
	d.OrsDistributed.CalculateTotal()
	d.IncaparinaDistributed.CalculateTotal()
	d.ReferralsGiven.CalculateTotal()
	d.CounterReferralsReceived.CalculateTotal()
	d.HealthFairsInCommunity.CalculateTotal()
	d.FirstAid.CalculateTotal()
	d.MobileClinicAssistance.CalculateTotal()
	d.RabiesCampaign.CalculateTotal()
	return nil
}

func (d *DutiesPerformed) CalculateTotal() {
	d.HomeVisits.CalculateTotal()
	d.HealthEdAtHome.CalculateTotal()
	d.HealthEdInSchools.CalculateTotal()
	d.HealthEdWithGroups.CalculateTotal()
	d.BloodPressureChecks.CalculateTotal()
	d.BloodSugarChecks.CalculateTotal()
	d.PregnancyTest.CalculateTotal()
	d.WeightAndHeightCheck.CalculateTotal()
	d.OrsDistributed.CalculateTotal()
	d.IncaparinaDistributed.CalculateTotal()
	d.ReferralsGiven.CalculateTotal()
	d.CounterReferralsReceived.CalculateTotal()
	d.HealthFairsInCommunity.CalculateTotal()
	d.FirstAid.CalculateTotal()
	d.MobileClinicAssistance.CalculateTotal()
	d.RabiesCampaign.CalculateTotal()
}
