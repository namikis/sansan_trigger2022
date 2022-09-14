import ReactStars from "react-stars";
import GradeText from "../../../atoms/Text/GradeText";

export type ReviewCardPropsType = {
  title: string;
  star: number;
  userName: string;
  text: string;
  premium: string;
}

const ReviewCard = ({title, star, userName, text, premium}: ReviewCardPropsType) => {

  return (
    <div className="h-full border-t-2 border-gray-200 border-opacity-60 overflow-hidden my-8">
        <div className="">
            <div className="mt-4"></div>
            <GradeText text={title} grade={3} />
            <ReactStars
              count={5}
              value={star}
              size={12}
              edit={false}
            />
            {premium
              ? <GradeText text={`投稿者：${userName}`} color='text-blue-900' grade={3} />
              : <GradeText text={`投稿者：${userName}`} color='text-gray-700' grade={1} />
            }
            {premium && <GradeText text={premium} color='text-red-700' grade={3} />}
            <GradeText text={text} grade={2} />
        </div>
    </div>
  )
}

export default ReviewCard;