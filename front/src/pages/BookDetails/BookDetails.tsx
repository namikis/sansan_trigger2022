import { useParams } from "react-router-dom";
import AppHeader from "../../components/layouts/AppHeader";
import BookDescription, {BookDescriptionPropsType} from "../../components/templates/BookDescription/BookDescriptionBig";
import { Link } from "react-router-dom";
import ReviewListBlock from "../../components/templates/BookReview/ReviewListBlock";
import GradeText from "../../components/atoms/Text/GradeText";
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

const BookDetails = () => {
  const bookDetails = bookDetailsJson as JsonType[];

  const bookId = Number(useParams().postId);
  const title = bookDetails[bookId].title;
  const subTitle = bookDetails[bookId].subTitle;
  const star = bookDetails[bookId].star;
  const auther = bookDetails[bookId].auther;
  const publisher = bookDetails[bookId].publisher;
  const date = new Date(bookDetails[bookId].date);
  const description = bookDetails[bookId].description;
  const numReviews = bookDetails[bookId].numReviews;
  const imgUrl = bookDetails[bookId].imgUrl;

  const bookDescriptionProps: BookDescriptionPropsType = {
    title,
    subTitle,
    star,
    auther,
    publisher,
    date,
    description,
    numReviews,
    bookId,
    imgUrl
  }

  return (
    <div>
      <AppHeader isLogin={false} />
          <BookDescription {...bookDescriptionProps} />
          <ReviewListBlock bookId={bookId} maxCardNum={3} star={star} numReviews={numReviews} />

          <div className="my-8 py-8 mx-auto flex justify-center">
            <Link to={`/review/${bookId}`}>
              <div className="bg-brown-base w-48 py-2 rounded hover:bg-brown-base-shadow ">
                <p className="text-center text-white text-lg ">もっとレビューを見る</p>
              </div>
            </Link>
          </div>
    </div>
  );
};

export default BookDetails;