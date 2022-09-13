import Header from "../components/layouts/Header";
import BigText from "../components/atoms/Text/BigText";
import MediumText from "../components/atoms/Text/MediumText";
import ReviewList from "../components/templates/ReviewList";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import BookDescriptionSmall, { BookDescriptionSmallPropsType } from "../components/templates/BookDescriptionSmall";

const ReviewPage = () => {
  const bookId = Number(useParams().postId);
  const title = "本のタイトル";
  const star = 5;
  const auther = "著者名著者名";
  const publisher = "出版社出版社出版社";
  const date = new Date("2000/1/1");
  const numReviews = 16;

  const bookDescriptionProps: BookDescriptionSmallPropsType = {
    title,
    star,
    auther,
    publisher,
    date,
  }

  return (
    <div>
      <Header isLogin={true} />
      <div className="container mx-auto my-4 px-4">
        <BookDescriptionSmall {...bookDescriptionProps} />
        <BigText text="この本をレビュー" />
        <Link to={`/post/${bookId}`}><MediumText text="レビューを書く" /></Link>
        <ReviewList bookId={bookId} />
      </div>
    </div>
  )
}

export default ReviewPage;