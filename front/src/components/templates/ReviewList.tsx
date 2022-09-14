import ReviewCard, { ReviewCardPropsType } from "../molecules/Card/ReviewCard";

type ReviewListPropsType = {
  bookId: number;
  maxCardNum: number;
  reviews: ReviewCardPropsType[];
};

const ReviewList = ({bookId, maxCardNum, reviews}: ReviewListPropsType) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto">
        <div>
          {reviews.slice(0, maxCardNum).map((review, index) =>
            <ReviewCard {...review} key={index}/>
          )}
        </div>
      </div>
    </section>
  )
};

export default ReviewList;