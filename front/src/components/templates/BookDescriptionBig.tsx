import MediumText from "../atoms/Text/MediumText";
import SmallText from "../atoms/Text/SmallText";
import BookImage from "../atoms/Image/BookImage";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";
import SubTitle from "../atoms/Title/SubTitle";

export type BookDescriptionPropsType = {
  title: string;
  star: number;
  auther: string;
  publisher: string;
  date: Date;
  description: string;
  numReviews: number;
  bookId: number
}

const BookDescription = ({title, star, auther, publisher, date, description, numReviews, bookId}: BookDescriptionPropsType) => {
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
          <div className="col-span-2">
            <BookImage />
          </div>
          <div className="col-span-3 pl-3">
            <div>
              <SubTitle title={title} />
              <ReactStars
                count={5}
                value={star}
                size={12}
                edit={false}
              />
              <Link to={`/review/${bookId}`}><SmallText text={`${numReviews}件`} color='text-blue-700' margin={false} /></Link>
            </div>
            <div className="my-2 py-2 border-t-2 border-gray-200 border-opacity-60">
              <MediumText text={`著者：${auther}`} color='border-gray-700' margin={false} />
              <MediumText text={`出版社：${publisher}`} color='border-gray-700' margin={false} />
              <MediumText text={`出版日：${formatDate(date)}`} color='border-gray-700' margin={false} />
              <div>
                <MediumText text={"説明"} color='border-gray-700' margin={false} />
                <SmallText text={description} color='border-gray-700' margin={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default BookDescription;