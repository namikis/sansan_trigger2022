package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/namikis/sansan_trigger2022/presen/response"
	"github.com/namikis/sansan_trigger2022/usecase"
)

type BookHandler interface {
	GetRandom(ctx *gin.Context)
}

type bookHandler struct {
	bookUsecase usecase.BookUsecase
}

func NewBookHandler(bu usecase.BookUsecase) BookHandler {
	return bookHandler{
		bookUsecase: bu,
	}
}

func (bh bookHandler) GetRandom(ctx *gin.Context) {
	book,err := bh.bookUsecase.GetRandom()
	if err!=nil{
		ctx.JSON(http.StatusBadRequest,gin.H{"error":"hoge"})
		return
	}

	bookRes := response.ConvertToBookResponse(book)

	ctx.JSON(http.StatusOK,gin.H{
		"book":bookRes,
	})
}
