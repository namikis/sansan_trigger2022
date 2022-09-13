package entity

type Book struct {
	Id        int    `db:"id"`
	Isbn      string `db:"isbn"`
	Title     string `db:"title"`
	Author    string `db:"author"`
	Image_url string `db:"image_url"`
}
