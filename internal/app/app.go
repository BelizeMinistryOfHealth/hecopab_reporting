package app

import "moh.gov.bz/hecopab/reporting/internal/db"

type App struct {
	Db   *db.Db
	Auth Auth
}

type Auth struct {
	JwkUrl string
	Iss    string
	Aud    string
}

type JwtToken struct {
	Email string
}
