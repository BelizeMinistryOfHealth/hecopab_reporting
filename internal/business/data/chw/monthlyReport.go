package chw

import (
	"context"
	"fmt"
	"google.golang.org/api/iterator"
	"moh.gov.bz/hecopab/reporting/internal/db"
)

// ChwReport manages the set of DB API's for community health workers monthly report access.
type Report struct {
	firestoreClient *db.FirestoreClient
	collection      string
}

// New constructs the db access API for chw monthly reports
func New(firestoreClient *db.FirestoreClient) Report {
	return Report{firestoreClient: firestoreClient, collection: "hecopab_chw_reports"}
}

// Create creates a new chw monthly report
func (c Report) Create(ctx context.Context, r MonthlyReportRecord) error {
	r.Report.PatientsSeen.CalculateTotal()
	r.Report.Deaths.CalculateTotal()
	r.Report.Complaints.CalculateTotal()
	r.Report.DutiesPerformed.CalculateTotal()
	r.Report.Births.CalculateTotal()
	for _, i := range r.Report.HealthEdSessions.Sessions {
		i.CalculateTotal()
	}
	_, err := c.firestoreClient.Client.Collection(c.collection).Doc(r.ID).Set(ctx, r)
	if err != nil {
		return fmt.Errorf("ChwReport.Create failed: %w", err)
	}
	return nil
}

// GetById fetches a chw monthly report from the database that matches the id
func (c Report) GetById(ctx context.Context, id string) (MonthlyReportRecord, error) {
	ref := c.firestoreClient.Client.Collection(c.collection)
	snap, err := ref.Doc(id).Get(ctx)
	if err != nil {
		return MonthlyReportRecord{}, fmt.Errorf("ChwReport.GetById failed: %w", err)
	}
	var record MonthlyReportRecord
	if snapErr := snap.DataTo(&record); snapErr != nil {
		return MonthlyReportRecord{}, fmt.Errorf("ChwReport.GetById failed to decode report: %w", err)
	}
	return record, nil
}

// List retrieves all chw monthly reports for the specified year
func (c Report) List(ctx context.Context, year int) ([]MonthlyReportRecord, error) {
	ref := c.firestoreClient.Client.Collection(c.collection)
	iter := ref.Where("report.year", "==", year).Documents(ctx)
	var records []MonthlyReportRecord
	for {
		doc, err := iter.Next()
		if err == iterator.Done {
			break
		}
		if err != nil {
			return []MonthlyReportRecord{}, fmt.Errorf("ChwReport.List failed: %w", err)
		}
		var record MonthlyReportRecord
		if err := doc.DataTo(&record); err != nil {
			return []MonthlyReportRecord{}, fmt.Errorf("ChwReport.List failed to decode record: %w", err)
		}
		records = append(records, record)
	}

	return records, nil

}

// Update updates an existing chw monthly report. Returns the error if there is one.
func (c Report) Update(ctx context.Context, r MonthlyReportRecord) error {
	_, err := c.firestoreClient.Client.Collection(c.collection).Doc(r.ID).Set(ctx, r)
	if err != nil {
		return fmt.Errorf("ChwReport.Update failed: %w", err)
	}
	return nil
}
