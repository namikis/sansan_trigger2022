import BigText from "../atoms/Text/BigText";
import MediumText from "../atoms/Text/MediumText";
import SmallText from "../atoms/Text/SmallText";
import BookImage from "../atoms/Image/BookImage";

export type BookDescriptionSmallPropsType = {
  title: string;
  star: number;
  auther: string;
  publisher: string;
  date: Date;
}

const BookDescriptionSmall = ({title, star, auther, publisher, date}: BookDescriptionSmallPropsType) => {
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
            <BigText text={title} />
            <SmallText text={`星${star}`} />
            <MediumText text={`著者：${auther}`} />
            <MediumText text={`出版社：${publisher}`} />
            <MediumText text={`出版日：${formatDate(date)}`} />
          </div>
        </div>
      </div>
    </section>
  )
};

export default BookDescriptionSmall;