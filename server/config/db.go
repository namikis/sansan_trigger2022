package config

import (
	"fmt"
	"os"
)

var (
	dbUser = os.Getenv("POSTGRES_USER")
	dbPass = os.Getenv("POSTGRES_PASSWORD")
	dbHost = os.Getenv("POSTGRES_HOST")
	dbName = os.Getenv("POSTGRES_DB")
	dbUrl  = os.Getenv("DB_URL")
)

func GetDbUri() string {
	if EnviromentType == "development" {
		return fmt.Sprintf(
			"host=%s user=%s password=%s dbname=%s sslmode=disable",
			dbHost,
			dbUser,
			dbPass,
			dbName,
		)
	} else if EnviromentType == "production" {
		return dbUrl
	} else {
		panic("GetDbUri failed")
	}
}
