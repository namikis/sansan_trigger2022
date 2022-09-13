import ReviewCard from "../molecules/Card/ReviewCard";
import {ReviewCardPropsType} from "../molecules/Card/ReviewCard/index";

type ReviewListPropsType = {
  bookId: number;
  maxCardNum: number;
};

const ReviewList = ({bookId, maxCardNum}: ReviewListPropsType) => {
  const title = "レビュータイトル";
  const star = 3.5;
  const userName = "user";
  const text = "レビュー内容".repeat(30);
  const reviewCardProps: ReviewCardPropsType = {
    title,
    star,
    userName,
    text
  }
  const reviewCardsProps = new Array<ReviewCardPropsType>(20).fill(reviewCardProps);

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto">
        <div>
          {reviewCardsProps.slice(0, maxCardNum).map((props, index) =>
            <ReviewCard {...props} key={index}/>
          )}
        </div>
      </div>
    </section>
  )
};

export default ReviewList;