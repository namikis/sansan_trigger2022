import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import BigText from "../atoms/Text/BigText";
import MediumText from "../atoms/Text/MediumText";
import SmallText from "../atoms/Text/SmallText";
import ReviewList from "./ReviewList";

type ReviewListBlockPropsType = {
  bookId: number;
  maxCardNum: number;
  star: number;
  numReviews: number;
};

const ReviewListBlock = ({bookId, maxCardNum, star, numReviews}: ReviewListBlockPropsType) => {
  return (
    <div>
      <BigText text="みんなのレビュー" />
      <ReactStars
        count={5}
        value={star}
        size={12}
        edit={false}
      />
      <SmallText text={`${numReviews}件`} color='border-gray-700'/>
      <Link to={`/post/${bookId}`}><MediumText text="レビューを書く" color='border-gray-700'/></Link>
      <ReviewList bookId={bookId} maxCardNum={maxCardNum} />
    </div>
  );
};

export default ReviewListBlock;