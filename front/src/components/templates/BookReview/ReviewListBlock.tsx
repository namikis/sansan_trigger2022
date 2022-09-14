import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import MediumText from "../../atoms/Text/MediumText";
import SmallText from "../../atoms/Text/SmallText";
import ReviewList from "./ReviewList";
import reviewsJson from "../../jsons/reviews.json";
import SubTitle from "../../atoms/Title/SubTitle";

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
          <SubTitle title="プレミアムユーザーのレビュー" />
          <Link to={`/review/${bookId}`}><SmallText text={`${premiumReviews.length}件`} color='border-gray-700' margin={false} /></Link>
          <ReviewList bookId={bookId} reviews={premiumReviews} maxCardNum={maxCardNum} />   
        </div>
      }
      <div className="my-2 py-2 border-t-2 border-gray-200 border-opacity-80">
        <SubTitle title="みんなのレビュー" />
        <ReactStars
          count={5}
          value={star}
          size={12}
          edit={false}
        />
        <Link to={`/review/${bookId}`}><SmallText text={`${generalReviews.length}件`} color='border-gray-700' margin={false} /></Link>
        <Link to={`/post/${bookId}`}><MediumText text="レビューを書く" color='border-gray-700' margin={false} /></Link>
        <ReviewList bookId={bookId} reviews={generalReviews} maxCardNum={maxCardNum} />   
      </div>
    </div>
  );
};

export default ReviewListBlock;