package handler

import (
	"fmt"
	"log"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/namikis/sansan_trigger2022/presen/response"
	"github.com/namikis/sansan_trigger2022/usecase"
)

type BookHandler interface {
	GetRandom(ctx *gin.Context)
	GetCount(ctx *gin.Context)
	GetBookById(ctx *gin.Context)
	GetBooks(ctx *gin.Context)
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
	book, err := bh.bookUsecase.GetRandom()
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "hoge"})
		return
	}

	bookRes := response.ConvertToBookResponse(book)

	ctx.JSON(http.StatusOK, gin.H{
		"book": bookRes,
	})
}

func (bh bookHandler) GetCount(ctx *gin.Context) {
	_count, err := bh.bookUsecase.GetCount()
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "hoge"})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{
		"count": _count,
	})
}

func (bh bookHandler) GetBookById(ctx *gin.Context) {
	_id, err := strconv.Atoi(ctx.Param("id"))
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "not number"})
		return
	}
	log.Printf("id is %d", _id)
	bookRes, err := bh.bookUsecase.GetBookById(_id)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "not fond"})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{
		"result": bookRes,
	})
}

func (bh bookHandler) GetBooks(ctx *gin.Context) {
	_id, err := strconv.Atoi(ctx.Param("offset"))
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "not number"})
		return
	}
	log.Printf("id is %d", _id)
	bookRes, err := bh.bookUsecase.GetBooks(_id)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "not fond"})
		return
	}
	fmt.Println(bookRes)
	ctx.JSON(http.StatusOK, gin.H{
		"result": bookRes,
	})
}
