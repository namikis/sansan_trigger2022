package usecase

import (
	"github.com/namikis/sansan_trigger2022/domain/entity"
	"github.com/namikis/sansan_trigger2022/domain/repository"
)

type BookUsecase interface {
	GetRandom() (entity.Book, error)
	GetCount() (int, error)
}

type bookUsecase struct {
	bookRepository repository.BookRepository
}

func NewBookUsecase(br repository.BookRepository) BookUsecase {
	return bookUsecase{
		bookRepository: br,
	}
}

func (bu bookUsecase) GetRandom() (entity.Book, error) {
	book, err := bu.bookRepository.GetRandom()
	return book, err
}

func (bu bookUsecase) GetCount() (int, error) {
	_count, err := bu.bookRepository.GetCount()
	return _count, err
}
