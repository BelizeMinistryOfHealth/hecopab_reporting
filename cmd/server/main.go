package main

import (
	"flag"
	"fmt"
	"os"

	"moh.gov.bz/hecopab/reporting/internal/config"
	"moh.gov.bz/hecopab/reporting/internal/server"
)

func main() {
	var confFile string
	flag.StringVar(&confFile, "c", "", "Specify configuration file.")
	flag.Parse()
	if len(confFile) == 0 {
		fmt.Print("please specify the configuration file using the -c flag")
		os.Exit(1)
	}
	cnf, err := config.ReadConf(confFile)
	if err != nil {
		fmt.Print("could not parse the configuration file")
	}
	server.NewServer(*cnf)
}
