import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import Input from "../../atoms/Input";
import GradeText from "../../atoms/Text/GradeText";
import TextArea from "../../atoms/TextArea";
import AppContainer from "../../layouts/AppContainer";

type ReviewPostBlockPropsType = {
  bookId: number;
};

const ReviewPostBlock = ({bookId}: ReviewPostBlockPropsType) => {

  return (
    <AppContainer>
    <div className="my-2 py-2 border-t-2 border-gray-200 border-opacity-80">
      <GradeText text="この本をレビュー" grade={4} />
      <div className="my-2 py-2 border-t-2 border-gray-200 border-opacity-60">
        <GradeText text="評価" grade={3} />
        <ReactStars
          count={5}
          value={0}
          size={48}
          half={false}
        />
      </div>
      <div className="my-2 py-2 border-t-2 border-gray-200 border-opacity-80">
        <GradeText text="レビュータイトル" grade={3} />
        <Input placeholder="最も伝えたいポイントは何ですか？" />
      </div>
      <div className="my-2 py-2 border-t-2 border-gray-200 border-opacity-80">
        <GradeText text="レビューを追加" grade={3} />
        <TextArea rows={8} placeholder="気に入ったこと/気に入らなかったことは何ですか？この製品をどのように使いましたか？"  />
      </div>
      <div className="my-8 py-8 border-t-2 border-gray-200 border-opacity-80 mx-auto flex justify-center">
        <Link to={`/book/${bookId}`}>
          <div className="bg-brown-base w-24 py-2 rounded hover:bg-brown-base-shadow ">
            <p className="text-center text-white text-lg ">投稿</p>
          </div>
        </Link>
      </div>
    </div>
    </AppContainer>
  );
};

export default ReviewPostBlock;