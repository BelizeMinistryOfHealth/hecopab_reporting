package config

import "github.com/spf13/viper"
import log "github.com/sirupsen/logrus"

type DbConf struct {
	Username string
	Password string
	Database string
	Host     string
	Port     string
	Sslmode  string
}

type AuthConf struct {
	JwkUrl   string
	Issuer   string
	Audience string
}

type AppConf struct {
	Db   DbConf
	Auth AuthConf
}

// ReadConf reads a yaml file and unmarshalls its content.
// The yaml file must have root siblings for the following environments:
// prod, test, dev
func ReadConf(fileName string) (*AppConf, error) {
	viper.AddConfigPath(".")
	viper.SetConfigFile(fileName)
	viper.SetConfigType("yaml")

	if err := viper.ReadInConfig(); err != nil {
		return nil, err
	}

	log.Infof("using configuration file: %s", fileName)

	var c DbConf
	err := viper.Sub("db").Unmarshal(&c)
	if err != nil {
		return nil, err
	}

	var a AuthConf
	err = viper.Sub("auth").Unmarshal(&a)
	if err != nil {
		return nil, err
	}

	appConf := AppConf{
		Db:   c,
		Auth: a,
	}

	return &appConf, nil
}
