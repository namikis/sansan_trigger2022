package repository

import (
	"github.com/jmoiron/sqlx"
	"github.com/namikis/sansan_trigger2022/domain/entity"
	"github.com/namikis/sansan_trigger2022/domain/repository"
)

// interface BookRepositoryはdomain/repository配下で実装してある
// これによりRepositoryがdomainに依存している

type bookRepository struct {
	Db *sqlx.DB
}

func NewBookRepository(db *sqlx.DB) repository.BookRepository {
	return bookRepository{
		Db: db,
	}
}

func (bu bookRepository) GetRandom() (entity.Book, error) {
	// sqlとの接続
	// jmoiron/sqlx

	book := entity.Book{
		Id:    1,
		Title: "book1",
	}

	return book, nil
}

func (bu bookRepository) GetCount() (int, error) {
	//
	// test

	bookcount := 10

	return bookcount, nil
}

func (bu bookRepository) GetBookById(i int) (entity.Book, error) {
	// sqlとの接続
	// jmoiron/sqlx
	query := "SELECT id,isbn,title,author,image_url from books where id = $1"

	row := bu.Db.QueryRowx(query, i)

	bk := entity.Book{}

	if err := row.StructScan(&bk); err != nil { //結果をBook形式で自動で格納
		return bk, err
	}
	return bk, nil
}
