import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import ReviewList from "./ReviewList";
import reviewsJson from "../../../assets/data/jsons/reviews.json";
import GradeText from "../../atoms/Text/GradeText";
import AppContainer from "../../layouts/AppContainer";

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
    <AppContainer>
      {premiumReviews.length > 0 &&
        <div className="mx-8 my-8 py-2 px-4 border-2 border-yellow-500 border-opacity-80 bg-yellow-50 rounded">
          <GradeText text="プレミアムユーザーのレビュー" grade={4} />
          <Link to={`/review/${bookId}`}><GradeText text={`${premiumReviews.length}件`} color='text-blue-700' grade={1} /></Link>
          <ReviewList bookId={bookId} reviews={premiumReviews} maxCardNum={maxCardNum} />   
        </div>
      }
      <div className="mx-8 my-8 py-2 px-4 border-t-2 border-gray-200 border-opacity-80">
        <GradeText text="みんなのレビュー" grade={4} />
        <ReactStars
          count={5}
          value={star}
          size={12}
          edit={false}
        />
        <Link to={`/review/${bookId}`}>
          <GradeText text={`${generalReviews.length}件`} color='text-blue-700' grade={1} />
        </Link>

        <Link to={`/post/${bookId}`}>
          <span className="mr-8"></span>
          <GradeText text="レビューを書く" color='text-blue-700' grade={3} />
        </Link>

        <ReviewList bookId={bookId} reviews={generalReviews} maxCardNum={maxCardNum} />   
      </div>
    </AppContainer>
  );
};

export default ReviewListBlock;