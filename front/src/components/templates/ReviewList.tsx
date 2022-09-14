import ReviewCard from "../molecules/Card/ReviewCard";
import reviewsJson from "../../jsons/reviews.json";

type ReviewListPropsType = {
  bookId: number;
  maxCardNum: number;
};

const ReviewList = ({bookId, maxCardNum}: ReviewListPropsType) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto">
        <div>
          {reviewsJson.slice(0, maxCardNum).map((review, index) =>
            <ReviewCard {...review} key={index}/>
          )}
        </div>
      </div>
    </section>
  )
};

export default ReviewList;