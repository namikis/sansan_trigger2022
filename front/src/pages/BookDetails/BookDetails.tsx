import { useParams } from "react-router-dom";
import AppHeader from "../../components/layouts/AppHeader";
import BookDescription, {BookDescriptionPropsType} from "../../components/templates/BookDescription/BookDescriptionBig";
import { Link } from "react-router-dom";
import ReviewListBlock from "../../components/templates/BookReview/ReviewListBlock";
import GradeText from "../../components/atoms/Text/GradeText";

const BookDetails = () => {
  const bookId = Number(useParams().postId);
  const title = "本のタイトル";
  const star = 3.5;
  const auther = "著者名著者名";
  const publisher = "出版社出版社出版社";
  const date = new Date("2000/1/1");
  const description = "説明文説明文説明文説明文説明文説明文説明文";
  const numReviews = 11;

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
      <AppHeader isLogin={false} />
      <div className="bg-gray-100">
        <div className="bg-white lg:max-w-4xl md:max-w-2xl mx-auto my-4 px-4">
          <BookDescription {...bookDescriptionProps} />
          <ReviewListBlock bookId={bookId} maxCardNum={3} star={star} numReviews={numReviews} />
          <Link to={`/review/${bookId}`}><GradeText text="もっとレビューを見る" grade={3} /></Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;