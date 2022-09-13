import { Link } from "react-router-dom";
import Input from "../atoms/Input";
import BigText from "../atoms/Text/BigText";
import MediumText from "../atoms/Text/MediumText";

type ReviewPostBlockPropsType = {
  bookId: number;
};

const ReviewPostBlock = ({bookId}: ReviewPostBlockPropsType) => {
  return (
    <div>
      <BigText text="この本をレビュー" />
      <div>
        <MediumText text="レビュータイトル" />
        <Input placeholder="最も伝えたいポイントは何ですか？" />
      </div>
      <div>
        <MediumText text="レビューを追加" />
        <Input placeholder="気に入ったこと/気に入らなかったことは何ですか？この製品をどのように使いましたか？" />
      </div>
      <Link to={`/book/${bookId}`}>投稿</Link>
    </div>
  );
};

export default ReviewPostBlock;