import { useParams } from "react-router-dom";
import Header from "../components/layouts/Header";

const BookDetails = () => {
  return (
    <div>
      <Header isLogin={false} />
      <h1>BookDetails</h1>
      <p>id: {useParams().postId}</p>
    </div>
  )
}

export default BookDetails;