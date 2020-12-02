package chw

import (
	"database/sql/driver"
	"encoding/json"
	"errors"
	"fmt"
)

type DutiesPerformed struct {
	HomeVisits               Tallies `json:"homeVisits"`
	HealthEdAtHome           Tallies `json:"healthEdAtHome"`
	HealthEdInSchools        Tallies `json:"healthEdInSchools"`
	HealthEdWithGroups       Tallies `json:"healthEdWithGroups"`
	BloodPressureChecks      Tallies `json:"bloodPressureChecks"`
	BloodSugarChecks         Tallies `json:"bloodSugarChecks"`
	PregnancyTest            Tallies `json:"pregnancyTest"`
	WeightAndHeightCheck     Tallies `json:"weightAndHeightCheck"`
	OrsDistributed           Tallies `json:"orsDistributed"`
	IncaparinaDistributed    Tallies `json:"incaparinaDistributed"`
	ReferralsGiven           Tallies `json:"referralsGiven"`
	CounterReferralsReceived Tallies `json:"counterReferralsReceived"`
	HealthFairsInCommunity   Tallies `json:"healthFairsInCommunity"`
	FirstAid                 Tallies `json:"firstAid"`
	MobileClinicAssistance   Tallies `json:"mobileClinicAssistance"`
	RabiesCampaign           Tallies `json:"rabiesCampaign"`
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
