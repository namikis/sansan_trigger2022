package db

import (
	"log"

	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"

	"github.com/namikis/sansan_trigger2022/config"
)

func NewDriver() *sqlx.DB {
	db, err := sqlx.Open("postgres", config.GetDbUri())
	if err != nil {
		log.Println("db connect failed")
		panic(err)
	}
	log.Println("db connect success")
	log.Println("test message")

	return db
}
