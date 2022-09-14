package main

import (
	"fmt"

	"github.com/namikis/sansan_trigger2022/infra/db"
	"github.com/namikis/sansan_trigger2022/infra/repository"
	"github.com/namikis/sansan_trigger2022/presen/handler"
	"github.com/namikis/sansan_trigger2022/presen/router"
	"github.com/namikis/sansan_trigger2022/usecase"
	"github.com/namikis/sansan_trigger2022/util/helper"
)

func main() {

	db := db.NewDriver()

	// book
	bookRepository := repository.NewBookRepository(db)
	bookUsecase := usecase.NewBookUsecase(bookRepository)
	bookHandler := handler.NewBookHandler(bookUsecase)

	e := router.InitRouter(bookHandler)

	port := helper.GetEnvOrDefault("PORT", "8080")
	e.Run(fmt.Sprintf(":%s", port))
}
