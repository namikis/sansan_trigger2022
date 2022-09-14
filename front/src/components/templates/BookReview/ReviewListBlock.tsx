import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import ReviewList from "./ReviewList";
import reviewsJson from "../../../assets/data/jsons/reviews.json";
import GradeText from "../../atoms/Text/GradeText";

type ReviewListBlockPropsType = {
  bookId: number;
  maxCardNum: number;
  star: number;
  numReviews: number;
};

const ReviewListBlock = ({bookId, maxCardNum, star, numReviews}: ReviewListBlockPropsType) => {
  const premiumReviews = reviewsJson.filter((review) => {
    return review.premium !== "";
  });
  const generalReviews = reviewsJson.filter((review) => {
    return review.premium === "";
  });
  return (
    <div>
      {premiumReviews.length > 0 &&
        <div className="my-2 p-2 border-2 border-yellow-500 border-opacity-80 bg-yellow-50 rounded">
          <GradeText text="プレミアムユーザーのレビュー" grade={4} />
          <Link to={`/review/${bookId}`}><GradeText text={`${premiumReviews.length}件`} color='text-blue-700' grade={1} /></Link>
          <ReviewList bookId={bookId} reviews={premiumReviews} maxCardNum={maxCardNum} />   
        </div>
      }
      <div className="my-2 py-2 border-t-2 border-gray-200 border-opacity-80">
        <GradeText text="みんなのレビュー" grade={4} />
        <ReactStars
          count={5}
          value={star}
          size={12}
          edit={false}
        />
        <Link to={`/review/${bookId}`}><GradeText text={`${generalReviews.length}件`} color='text-blue-700' grade={1} /></Link>
        <Link to={`/post/${bookId}`}><GradeText text="レビューを書く" color='text-blue-700' grade={3} /></Link>
        <ReviewList bookId={bookId} reviews={generalReviews} maxCardNum={maxCardNum} />   
      </div>
    </div>
  );
};

export default ReviewListBlock;