package chw

import (
	"database/sql/driver"
	"encoding/json"
	"errors"
	"fmt"
)

type Meetings struct {
	CommunityMeetings int    `json:"communityMeetings"`
	MeetingsOrganized int    `json:"meetingsOrganized"`
	TrainingSessions  int    `json:"trainingSessions"`
	Workshops         int    `json:"workshops"`
	Other             int    `json:"other"`
	Comments          string `json:"comments"`
}

// Value implements driver.Valuer. It is used by the sql driver
// to convert Meetings to JSON before persisting it.
func (m Meetings) Value() (driver.Value, error) {
	return json.Marshal(m)
}

// Scan implements sql.Scanner. The database driver uses this to decode a JSON-encoded
// value into struct fields. It is used when Scanning a column from the database.
func (m *Meetings) Scan(value interface{}) error {
	b, ok := value.([]byte)
	if !ok {
		return errors.New("type assertion of DutiesPerformed to []byte failed")
	}
	err := json.Unmarshal(b, &m)
	if err != nil {
		return fmt.Errorf("failed to unmarshall duties performed: %w", err)
	}
	return nil
}
