import { useParams } from "react-router-dom";
import Header from "../components/layouts/Header";
import MediumText from "../components/atoms/Text/MediumText";
import BookDescription, {BookDescriptionPropsType} from "../components/templates/BookDescriptionBig";
import { Link } from "react-router-dom";
import ReviewListBlock from "../components/templates/ReviewListBlock";

const BookDetails = () => {
  const bookId = Number(useParams().postId);
  const title = "本のタイトル";
  const star = 3.5;
  const auther = "著者名著者名";
  const publisher = "出版社出版社出版社";
  const date = new Date("2000/1/1");
  const description = "説明文説明文説明文説明文説明文説明文説明文";
  const numReviews = 16;

  const bookDescriptionProps: BookDescriptionPropsType = {
    title,
    star,
    auther,
    publisher,
    date,
    description,
    numReviews,
    bookId
  }

  return (
    <div>
      <Header isLogin={false} />
      <div className="container mx-auto my-4 px-4">
        <BookDescription {...bookDescriptionProps} />
        <ReviewListBlock bookId={bookId} maxCardNum={3} star={star} numReviews={numReviews} />
        <Link to={`/review/${bookId}`}><MediumText text="もっとレビューを見る" /></Link>
      </div>
    </div>
  );
};

export default BookDetails;