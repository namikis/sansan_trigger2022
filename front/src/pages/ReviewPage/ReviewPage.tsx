import AppHeader from "../../components/layouts/AppHeader";
import { useParams } from "react-router-dom";
import BookDescriptionSmall, { BookDescriptionSmallPropsType } from "../../components/templates/BookDescription/BookDescriptionSmall";
import ReviewListBlock from "../../components/templates/BookReview/ReviewListBlock";

const ReviewPage = () => {
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
      <AppHeader isLogin={true} />
      <div className="">
        <div className="bg-white md:mx-24 mx-auto my-4 px-4">
          <ReviewListBlock bookId={bookId} maxCardNum={100} star={star} numReviews={numReviews} />
        </div>
      </div>
    </div>
  )
}

export default ReviewPage;