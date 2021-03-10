package chw

import (
	"database/sql/driver"
	"encoding/json"
	"errors"
	"fmt"
	"time"

	"moh.gov.bz/hecopab/reporting/internal/models"
)

type EdSession struct {
	DateHeld time.Time               `json:"dateHeld"`
	Topic    string                  `json:"topic"`
	Venue    string                  `json:"venue"`
	Total    models.GenderCategories `json:"total"`
}

// Value implements driver.Valuer. It is used by the sql driver
// to convert EdSession struct to JSON before persisting it.
func (h EdSession) Value() (driver.Value, error) {
	return json.Marshal(h)
}

// Scan implements sql.Scanner. The database driver uses this to decode a JSON-encoded
// value into struct fields. It is used when Scanning a column from the database.
func (h *EdSession) Scan(value interface{}) error {
	b, ok := value.([]byte)
	if !ok {
		return errors.New("type assertion of DutiesPerformed to []byte failed")
	}
	err := json.Unmarshal(b, &h)
	if err != nil {
		return fmt.Errorf("failed to unmarshall duties performed: %w", err)
	}
	h.CalculateTotal()
	return nil
}

func (h *EdSession) CalculateTotal() {
	h.Total.CalculateTotal()
}

type HealthEdSession struct {
	Sessions []EdSession `json:"sessions" firestore:"sessions"`
}

// Value implements driver.Valuer. It is used by the sql driver
// to convert HealthEdSession struct to JSON before persisting it.
func (h HealthEdSession) Value() (driver.Value, error) {
	return json.Marshal(h)
}

func (h *HealthEdSession) Scan(value interface{}) error {
	b, ok := value.([]byte)
	if !ok {
		return errors.New("type assertion of DutiesPerformed to []byte failed")
	}
	err := json.Unmarshal(b, &h)
	if err != nil {
		return fmt.Errorf("failed to unmarshall duties performed: %w", err)
	}
	for idx, _ := range h.Sessions {
		h.Sessions[idx].Total.CalculateTotal()
	}
	return nil
}
