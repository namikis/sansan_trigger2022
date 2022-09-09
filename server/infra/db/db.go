package db

import (
	"database/sql"
	"log"

	_ "github.com/lib/pq"

	"github.com/namikis/sansan_trigger2022/config"
)

func NewDriver() *sql.DB {
	db, err := sql.Open("postgres", config.GetDbUri())
	if err != nil {
		log.Println("db connect failed")
		panic(err)
	}
	log.Println("db connect success")

	return db
}
