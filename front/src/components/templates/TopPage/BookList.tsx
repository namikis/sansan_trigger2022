import BookCard from "../../molecules/Card/BookCard"
import SubTitle from "../../atoms/Title/SubTitle";
import booksJson from "../../../assets/data/jsons/books.json";

const BookList = () => {
  const books = booksJson;

  return (
    <div>
        <SubTitle title="おすすめの本" />
        <section className="text-gray-600 body-font">
        <div className="container px-0 py-6 mx-auto">
            <div className="flex flex-wrap -m-1">
            {books.map((book,key)=>{
              return <BookCard index={key} key={key} book={book}/>
            })}
            </div>
        </div>
        </section>
    </div>
  )
};

export default BookList;