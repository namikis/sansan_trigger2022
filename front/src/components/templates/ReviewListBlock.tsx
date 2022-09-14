import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import BigText from "../atoms/Text/BigText";
import MediumText from "../atoms/Text/MediumText";
import SmallText from "../atoms/Text/SmallText";
import ReviewList from "./ReviewList";
import reviewsJson from "../../jsons/reviews.json";

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
      <div>
        <BigText text="プレミアムユーザーのレビュー" />
        <SmallText text={`${premiumReviews.length}件`} color='border-gray-700'/>
        <Link to={`/post/${bookId}`}><MediumText text="レビューを書く" color='border-gray-700'/></Link>
        <ReviewList bookId={bookId} reviews={premiumReviews} maxCardNum={maxCardNum} />   
      </div>
      <div>
        <BigText text="みんなのレビュー" />
        <ReactStars
          count={5}
          value={star}
          size={12}
          edit={false}
        />
        <SmallText text={`${generalReviews.length}件`} color='border-gray-700'/>
        <Link to={`/post/${bookId}`}><MediumText text="レビューを書く" color='border-gray-700'/></Link>
        <ReviewList bookId={bookId} reviews={generalReviews} maxCardNum={maxCardNum} />   
      </div>
    </div>
  );
};

export default ReviewListBlock;