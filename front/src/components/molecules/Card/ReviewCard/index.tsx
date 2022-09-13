import MediumText from "../../../atoms/Text/MediumText"
import SmallText from "../../../atoms/Text/SmallText"

type ReviewCardPropsType = {
  title: string;
  star: number;
  userName: string;
  text: string;
}

const ReviewCard = ({title, star, userName, text}: ReviewCardPropsType) => {
  return (
    <div className="p-1">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <div className="">
              <MediumText text={title} />
              <SmallText text={`星${star}`}/><SmallText text={`投稿者：${userName}`}/>
              <MediumText text={text} />
          </div>
      </div>
    </div>
  )
}

export default ReviewCard;