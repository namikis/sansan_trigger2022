package response

import "github.com/namikis/sansan_trigger2022/domain/entity"

type BookResponse struct {
	Id int `json:"id"`
	Title string `json:"title"`
}


func ConvertToBookResponse(book entity.Book) BookResponse {
	return BookResponse{
		Id: book.Id,
		Title: book.Title,
	}
}