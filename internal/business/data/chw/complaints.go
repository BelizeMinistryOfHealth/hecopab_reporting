package chw

import (
	"database/sql/driver"
	"encoding/json"
	"errors"
	"fmt"
)

type Complaints struct {
	Malnutrition Tallies `json:"malnutrition" firestore:"malnutrition"`
	Diarrhea     Tallies `json:"diarrhea" firestore:"diarrhea"`
	Cold         Tallies `json:"cold" firestore:"cold"`
	Fever        Tallies `json:"fever" firestore:"fever"`
	FeverRash    Tallies `json:"feverRash" firestore:"feverRash"`
	SoresRashes  Tallies `json:"soresRashes" firestore:"soresRashes"`
}

// Value implements driver.Valuer. It is used by the sql driver
// to convert the Complaints struct to JSON before persisting it.
func (c Complaints) Value() (driver.Value, error) {
	return json.Marshal(c)
}

// Scan implements sql.Scanner. The database driver uses this to decode a JSON-encoded
// value into struct fields. It is used when Scanning a column from the database.
func (c *Complaints) Scan(value interface{}) error {
	b, ok := value.([]byte)
	if !ok {
		return errors.New("type assertion of Complaints to []byte failed")
	}
	err := json.Unmarshal(b, &c)
	if err != nil {
		return fmt.Errorf("failed to unmarshall complaints: %w", err)
	}

	c.Cold.CalculateTotal()
	c.Diarrhea.CalculateTotal()
	c.Fever.CalculateTotal()
	c.FeverRash.CalculateTotal()
	c.Malnutrition.CalculateTotal()
	c.SoresRashes.CalculateTotal()
	return nil

}

func (c *Complaints) CalculateTotal() {
	c.Cold.CalculateTotal()
	c.Diarrhea.CalculateTotal()
	c.Fever.CalculateTotal()
	c.FeverRash.CalculateTotal()
	c.Malnutrition.CalculateTotal()
	c.SoresRashes.CalculateTotal()
}
