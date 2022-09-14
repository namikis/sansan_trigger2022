import { useParams } from "react-router-dom";
import Header from "../components/layouts/Header";
import BookDescriptionSmall, { BookDescriptionSmallPropsType } from "../components/templates/BookDescriptionSmall";
import ReviewPostBlock from "../components/templates/ReviewPostBlock";

const PostPage = () => {
  const bookId = Number(useParams().postId);
  const title = "本のタイトル";
  const star = 3.5;
  const auther = "著者名著者名";
  const publisher = "出版社出版社出版社";
  const date = new Date("2000/1/1");
  const numReviews = 11;

  const bookDescriptionProps: BookDescriptionSmallPropsType = {
    title,
    star,
    auther,
    publisher,
    date,
    numReviews,
    bookId
  }

  return (
    <div>
      <Header isLogin={true} />
        <div className="bg-gray-100">
          <div className="bg-white lg:max-w-4xl md:max-w-2xl mx-auto my-4 px-4">
          <BookDescriptionSmall {...bookDescriptionProps} />
          <ReviewPostBlock bookId={bookId} />
        </div>
      </div>
    </div>
  )
}

export default PostPage;