import AppHeader from "../../components/layouts/AppHeader";
import { useParams } from "react-router-dom";
import BookDescriptionSmall, { BookDescriptionSmallPropsType } from "../../components/templates/BookDescription/BookDescriptionSmall";
import ReviewListBlock from "../../components/templates/BookReview/ReviewListBlock";
import bookDetailsJson from "../../assets/data/jsons/bookDetails.json";

export type JsonType = {
  title: string;
  subTitle: string;
  star: number;
  auther: string;
  publisher: string;
  date: string;
  description: string;
  numReviews: number;
  bookId: number;
  imgUrl: string;
}

const ReviewPage = () => {
  const bookDetails = bookDetailsJson as JsonType[];

  const bookId = Number(useParams().postId);
  const title = bookDetails[bookId].title;
  const subTitle = bookDetails[bookId].subTitle;
  const star = bookDetails[bookId].star;
  const auther = bookDetails[bookId].auther;
  const publisher = bookDetails[bookId].publisher;
  const date = new Date(bookDetails[bookId].date);
  const numReviews = bookDetails[bookId].numReviews;
  const imgUrl = bookDetails[bookId].imgUrl;

  const bookDescriptionProps: BookDescriptionSmallPropsType = {
    title,
    subTitle,
    star,
    auther,
    publisher,
    date,
    numReviews,
    bookId,
    imgUrl
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