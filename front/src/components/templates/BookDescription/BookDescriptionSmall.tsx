import BookImage from "../../atoms/Image/BookImage";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";
import GradeText from "../../atoms/Text/GradeText";
import AppContainer from "../../layouts/AppContainer";

export type BookDescriptionSmallPropsType = {
  title: string;
  subTitle: string;
  imgUrl: string;
  star: number;
  auther: string;
  publisher: string;
  date: Date;
  numReviews: number;
  bookId: number;
}

const BookDescriptionSmall = ({title, subTitle, imgUrl, star, auther, publisher, date, numReviews, bookId}: BookDescriptionSmallPropsType) => {
  const formatDate = (date: Date) => {
    const y = date.getFullYear();
    const m = ("00" + (date.getMonth()+1)).slice(-2);
    const d = ("00" + date.getDate()).slice(-2);
    return (`${y}/${m}/${d}`);
  }

  return (
    <div className="bg-gray-100">
      <AppContainer>
        <section className="text-gray-600 body-font">
          <div className="container px-0 py-6 mx-auto">
            <div className="grid grid-cols-5">
              <div className="col-span-1">
                <BookImage imgUrl={imgUrl} />
              </div>
              <div className="col-span-4 px-3">
                <div>
                  <GradeText text={title} grade={4} />
                  <GradeText text={subTitle} grade={3} />
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </AppContainer>
    </div>
  )
};

export default BookDescriptionSmall;