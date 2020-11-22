package models

// GeographicalVectors is the vectors for some of the monthly reports.
// They require that the numbers be broken down by Rural or Urban.
type GeographicalVectors struct {
	Rural int `json:"rural"`
	Urban int `json:"urban"`
}
