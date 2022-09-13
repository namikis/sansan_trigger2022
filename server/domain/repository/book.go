package repository

import "github.com/namikis/sansan_trigger2022/domain/entity"

type BookRepository interface {
	GetRandom() (entity.Book, error)
	GetCount() (int, error)
	GetBookById(int) (entity.Book, error)
}
