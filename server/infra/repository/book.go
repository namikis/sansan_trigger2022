package repository

import (
	"database/sql"

	"github.com/namikis/sansan_trigger2022/domain/entity"
	"github.com/namikis/sansan_trigger2022/domain/repository"
)

// interface BookRepositoryはdomain/repository配下で実装してある
// これによりRepositoryがdomainに依存している

type bookRepository struct {
	Db *sql.DB
}

func NewBookRepository(db *sql.DB) repository.BookRepository {
	return bookRepository{
		Db: db,
	}
}


func (bu bookRepository) GetRandom() (entity.Book, error) {
	// sqlとの接続
	// jmoiron/sqlx

	book := entity.Book{
		Id: 1,
		Title: "book1",
	}

	return book, nil
}

