import React,{useRef,useEffect} from "react";
import { useParams,Location, useLocation } from "react-router-dom";
import AppHeader from "../../components/layouts/AppHeader";
import BookDescription, {BookDescriptionPropsType} from "../../components/templates/BookDescription/BookDescriptionBig";
import { Link } from "react-router-dom";
import ReviewListBlock from "../../components/templates/BookReview/ReviewListBlock";
import GradeText from "../../components/atoms/Text/GradeText";

const useLocationChange = (callback: (location: Location) => void) => {
  const refCallback = useRef<undefined | ((location: Location) => void)>()
  const location = useLocation()

  useEffect(() => {
    refCallback.current = callback
  }, [callback])

  // ロケーションに変更があったときに処理実行
  useEffect(() => {
    if (refCallback.current) {
      refCallback.current(location)
    }
  }, [location])
}


const BookDetails = () => {
  const bookId = Number(useParams().postId);
  const title = "本のタイトル";
  const star = 3.5;
  const auther = "著者名著者名";
  const publisher = "出版社出版社出版社";
  const date = new Date("2000/1/1");
  const description = "説明文説明文説明文説明文説明文説明文説明文";
  const numReviews = 11;

  const bookDescriptionProps: BookDescriptionPropsType = {
    title,
    star,
    auther,
    publisher,
    date,
    description,
    numReviews,
    bookId
  }

  useLocationChange((location) => {
    window.scrollTo(0,0)
  })
  
  return (
    <div>
      <AppHeader isLogin={false} />
          <BookDescription {...bookDescriptionProps} />
          <ReviewListBlock bookId={bookId} maxCardNum={3} star={star} numReviews={numReviews} />

          <div className="my-8 py-8 mx-auto flex justify-center">
            <Link to={`/review/${bookId}`}>
              <div className="bg-brown-base w-48 py-2 rounded hover:bg-brown-base-shadow ">
                <p className="text-center text-white text-lg ">もっとレビューを見る</p>
              </div>
            </Link>
          </div>
    </div>
  );
};

export default BookDetails;