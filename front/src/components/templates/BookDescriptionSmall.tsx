import MediumText from "../atoms/Text/MediumText";
import SmallText from "../atoms/Text/SmallText";
import BookImage from "../atoms/Image/BookImage";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";
import SubTitle from "../atoms/Title/SubTitle";

export type BookDescriptionSmallPropsType = {
  title: string;
  star: number;
  auther: string;
  publisher: string;
  date: Date;
  numReviews: number;
  bookId: number;
}

const BookDescriptionSmall = ({title, star, auther, publisher, date, numReviews, bookId}: BookDescriptionSmallPropsType) => {
  const formatDate = (date: Date) => {
    const y = date.getFullYear();
    const m = ("00" + (date.getMonth()+1)).slice(-2);
    const d = ("00" + date.getDate()).slice(-2);
    return (`${y}/${m}/${d}`);
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-0 py-6 mx-auto">
        <div className="grid grid-cols-5">
          <div className="col-span-1">
            <BookImage />
          </div>
          <div className="col-span-4 px-3">
            <SubTitle title={title} />
            <div className="my-2 py-2 border-t-2 border-gray-200 border-opacity-60">
              <ReactStars
                count={5}
                value={star}
                size={12}
                edit={false}
              />
              <Link to={`/review/${bookId}`}><SmallText text={`${numReviews}件`} color='border-gray-700'/></Link>
              <MediumText text={`著者：${auther}`} color='border-gray-700'/>
              <MediumText text={`出版社：${publisher}`} color='border-gray-700'/>
              <MediumText text={`出版日：${formatDate(date)}`} color='border-gray-700'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default BookDescriptionSmall;