package db

import (
	"database/sql"
	"fmt"

	"moh.gov.bz/hecopab/reporting/internal/config"
)

type Db struct {
	*sql.DB
}

func NewConnection(cnf *config.DbConf) (*Db, error) {
	connstr := fmt.Sprintf("user=%s dbname=%s password=%s host=%s sslmode=disable", cnf.Username, cnf.Database, cnf.Password, cnf.Host)
	db, err := sql.Open("postgres", connstr)
	if err != nil {
		return nil, err
	}

	return &Db{db}, nil
}
