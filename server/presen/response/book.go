package response

import "github.com/namikis/sansan_trigger2022/domain/entity"

type BookResponse struct {
	Id        int    `json:"id"`
	Isbn      string `json:"isbn"`
	Title     string `json:"title"`
	Author    string `json:"author"`
	Image_url string `json:"image_url"`
}

func ConvertToBookResponse(book entity.Book) BookResponse {
	return BookResponse{
		Id:        book.Id,
		Isbn:      book.Isbn,
		Title:     book.Title,
		Author:    book.Author,
		Image_url: book.Image_url,
	}
}
