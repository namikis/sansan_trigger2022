import ReactStars from "react-stars";
import MediumText from "../../../atoms/Text/MediumText"
import SmallText from "../../../atoms/Text/SmallText"

export type ReviewCardPropsType = {
  title: string;
  star: number;
  userName: string;
  text: string;
  premium: string;
}

const ReviewCard = ({title, star, userName, text, premium}: ReviewCardPropsType) => {

  return (
    <div className="h-full border-t-2 border-gray-200 border-opacity-60 overflow-hidden">
        <div className="">
            <MediumText text={title} color='border-gray-700' margin={false} />
            <ReactStars
              count={5}
              value={star}
              size={12}
              edit={false}
            />
            {premium
              ? <MediumText text={`投稿者：${userName}`} color='text-blue-900' margin={false} />
              : <SmallText text={`投稿者：${userName}`} color='text-gray-700' margin={false} />
            }
            {premium && <MediumText text={premium} color='text-red-700' margin={false} />}
            <MediumText text={text} color='border-gray-700' margin={false} />
        </div>
    </div>
  )
}

export default ReviewCard;