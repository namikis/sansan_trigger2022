package router

import (
	"github.com/gin-gonic/gin"
	"github.com/namikis/sansan_trigger2022/presen/handler"
)

func InitRouter(bh handler.BookHandler) *gin.Engine {
	e := gin.Default()
	InitBookRouter(e, bh)

	return e
}

func InitBookRouter(e *gin.Engine, bh handler.BookHandler) {
	eBook := e.Group("/book")

	eBook.GET("/random", bh.GetRandom)
	eBook.GET("/count", bh.GetCount)
	eBook.GET("/:id", bh.GetBookById)

}
