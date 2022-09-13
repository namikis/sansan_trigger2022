import BookCard from "../atoms/Card/BookCard"

const BookList = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-0 py-6 mx-auto">
        <div className="flex flex-wrap -m-1">
          {[...Array(20)].map((_, i) => i).map((num, index) =>
            <BookCard key={index}/>
          )}
        </div>
      </div>
    </section>
  )
};

export default BookList;