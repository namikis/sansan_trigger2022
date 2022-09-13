import { useParams } from "react-router-dom";
import Header from "../components/layouts/Header";
import ReviewList from "../components/templates/ReviewList";
import BigText from "../components/atoms/Text/BigText";
import MediumText from "../components/atoms/Text/MediumText";
import SmallText from "../components/atoms/Text/SmallText";
import BookDescription, {BookDescriptionPropsType} from "../components/templates/BookDescriptionBig";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

const BookDetails = () => {
  const bookId = Number(useParams().postId);
  const title = "本のタイトル";
  const star = 5;
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
  }

  return (
    <div>
      <Header isLogin={false} />
      <div className="container mx-auto my-4 px-4">
        <BookDescription {...bookDescriptionProps} />
        <BigText text="みんなのレビュー" />
        <ReactStars
          count={5}
          value={star}
          size={12}
          edit={false}
        />
        <Link to={`/review/${bookId}`}><SmallText text={`${numReviews}件`} /></Link>
        <Link to={`/post/${bookId}`}><MediumText text="レビューを書く" /></Link>
        <ReviewList bookId={bookId} />
      </div>
    </div>
  );
};

export default BookDetails;