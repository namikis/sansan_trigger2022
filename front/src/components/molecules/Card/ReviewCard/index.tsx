import ReactStars from "react-stars";
import MediumText from "../../../atoms/Text/MediumText"
import SmallText from "../../../atoms/Text/SmallText"

export type ReviewCardPropsType = {
  title: string;
  star: number;
  userName: string;
  text: string;
}

const ReviewCard = ({title, star, userName, text}: ReviewCardPropsType) => {

  return (
    <div className="h-full border-t-2 border-gray-200 border-opacity-60 overflow-hidden">
        <div className="">
            <MediumText text={title} color='border-gray-700'/>
            <ReactStars
              count={5}
              value={star}
              size={12}
              edit={false}
            />
            <SmallText text={`投稿者：${userName}`} color='border-gray-700'/>
            <MediumText text={text} color='border-gray-700'/>
        </div>
    </div>
  )
}

export default ReviewCard;