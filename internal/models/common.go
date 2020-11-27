package models

import (
	"database/sql/driver"
	"encoding/json"
	"errors"
	"fmt"
)

// GeographicalVectors is the vectors for some of the monthly reports.
// They require that the numbers be broken down by Rural or Urban.
type GeographicalVectors struct {
	Rural int `json:"rural"`
	Urban int `json:"urban"`
}

type GenderCategories struct {
	Male   int `json:"male"`
	Female int `json:"female"`
	Total  int `json:"total"`
}

// Value makes the GenderCategories struct implement driver.Valuer.
// This simply returns the JSON-encoded representation of the struct.
// The sql driver uses this for encoding a struct to a json value.
func (g GenderCategories) Value() (driver.Value, error) {
	n := GenderCategories{
		Male:   g.Male,
		Female: g.Female,
		Total:  g.Male + g.Female,
	}
	return json.Marshal(n)
}

// Scan makes the GenderCategories struct implement sql.Scanner. This method
// decodes a JSON-encoded value into struct fields
func (e *GenderCategories) Scan(value interface{}) error {
	b, ok := value.([]byte)
	if !ok {
		return errors.New("type assertion GenderCategories to []byte failed")
	}
	var temp GenderCategories
	err := json.Unmarshal(b, &temp)
	if err != nil {
		return fmt.Errorf("error unmarshalling the gender categories: %w", err)
	}
	temp.Total = temp.Female + temp.Male
	e.Total = temp.Total
	e.Male = temp.Male
	e.Female = temp.Female
	return nil
}

func (e *GenderCategories) CalculateTotal() {
	e.Total = e.Male + e.Female
}
