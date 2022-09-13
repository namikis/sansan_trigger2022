import BookCard from "../molecules/Card/BookCard"

import SubTitle from "../atoms/Title/SubTitle";

const BookList = () => {
  return (
    <div>
        <SubTitle title="おすすめの本" />
        <section className="text-gray-600 body-font">
        <div className="container px-0 py-6 mx-auto">
            <div className="flex flex-wrap -m-1">
            {[...Array(20)].map((_, i) => i).map((num, index) =>
                <BookCard index={index} key={index}/>
            )}
            </div>
        </div>
        </section>
    </div>
  )
};

export default BookList;