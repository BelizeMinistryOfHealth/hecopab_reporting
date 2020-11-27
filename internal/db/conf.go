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
	var connstr = fmt.Sprintf("user=%s dbname=%s password=%s host=%s port=%s", cnf.Username, cnf.Database, cnf.Password, cnf.Host, cnf.Port)
	if cnf.Sslmode == "disable" {
		connstr = fmt.Sprintf("user=%s dbname=%s password=%s host=%s port=%s sslmode=disable", cnf.Username, cnf.Database, cnf.Password, cnf.Host, cnf.Port)
	}

	db, err := sql.Open("postgres", connstr)
	if err != nil {
		return nil, err
	}

	return &Db{db}, nil
}
