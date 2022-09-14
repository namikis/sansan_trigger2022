import BookImage from "../../atoms/Image/BookImage";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";
import GradeText from "../../atoms/Text/GradeText";

import AppContainer from "../../layouts/AppContainer";
import MainTitle from "../../atoms/Title/MainTitle";
import VerticalMargin from "../../atoms/Margin/VerticaMargin";

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
    <section className="text-gray-600 body-font bg-gray-100">
      <AppContainer>
      <div className="container px-0 py-6 mx-auto">
        <div className="grid grid-cols-5">
          <div className="col-span-2">
            <BookImage />
          </div>
          <div className="col-span-3 pl-3">
            <div className="my-2">
              <MainTitle title={title} />
              <VerticalMargin y="8" />
              <ReactStars
                count={5}
                value={star}
                size={12}
                edit={false}
              />
              <Link to={`/review/${bookId}`}><GradeText text={`${numReviews}件`} grade={1} /></Link>
            </div>
            <div className="my-2 py-2 border-t-2 border-gray-200 border-opacity-60">
              <GradeText text={`著者：${auther}`} grade={3} inlineBlock={false} />
              <GradeText text={`出版社：${publisher}`} grade={3} inlineBlock={false} />
              <GradeText text={`出版日：${formatDate(date)}`} grade={3} inlineBlock={false} />
              <div>
                <GradeText text={"説明"} grade={3} />
                <GradeText text={description} grade={2} />
              </div>
              <div className="my-2">
                <Link to={`/rental`}>
                  <div className="bg-brown-base w-48 py-2 rounded hover:bg-brown-base-shadow ">
                    <p className="text-center text-white text-lg ">この本を借りる</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </AppContainer>
    </section>
  )
};

export default BookDescription;