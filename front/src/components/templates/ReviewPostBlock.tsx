import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import Input from "../atoms/Input";
import MediumText from "../atoms/Text/MediumText";
import TextArea from "../atoms/TextArea";
import SubTitle from "../atoms/Title/SubTitle";

type ReviewPostBlockPropsType = {
  bookId: number;
};

const ReviewPostBlock = ({bookId}: ReviewPostBlockPropsType) => {

  return (
    <div className="my-2 py-2 border-t-2 border-gray-200 border-opacity-80">
      <SubTitle title="この本をレビュー" />
      <div className="my-2 py-2 border-t-2 border-gray-200 border-opacity-60">
        <MediumText text="評価" color='border-gray-700' margin={false} />
        <ReactStars
          count={5}
          value={0}
          size={48}
          half={false}
        />
      </div>
      <div className="my-2 py-2 border-t-2 border-gray-200 border-opacity-80">
        <MediumText text="レビュータイトル" color='border-gray-700' margin={false} />
        <Input placeholder="最も伝えたいポイントは何ですか？" />
      </div>
      <div className="my-2 py-2 border-t-2 border-gray-200 border-opacity-80">
        <MediumText text="レビューを追加" color='border-gray-700' margin={false} />
        <TextArea rows={8} placeholder="気に入ったこと/気に入らなかったことは何ですか？この製品をどのように使いましたか？"  />
      </div>
      <div className="my-2 py-2 border-t-2 border-gray-200 border-opacity-80">
        <Link to={`/book/${bookId}`}>投稿</Link>
      </div>
    </div>
  );
};

export default ReviewPostBlock;