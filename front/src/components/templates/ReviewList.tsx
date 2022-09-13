import ReviewCard from "../molecules/Card/ReviewCard"

type ReviewListPropsType = {
  bookId: number;
};

const ReviewList = ({bookId}: ReviewListPropsType) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto">
        <div>
          {[...Array(20)].map((_, i) => i).map((num, index) =>
            <ReviewCard title={"レビュータイトル"} star={5} userName="user" text="レビュー内容" key={index}/>
          )}
        </div>
      </div>
    </section>
  )
};

export default ReviewList;