import React,{useState} from 'react'
import { useParams } from 'react-router-dom';

import RentalStep1 from './RentalStep/RentalStep1'
import RentalStep2 from './RentalStep/RentalStep2'


export type rentalStepType = {
  setNowPage:React.Dispatch<React.SetStateAction<number>>;
  bookId: number;
}

const BookRental = () => {
  const [nowPage, setNowPage] = useState<number>(1);
  const bookId = Number(useParams().postId);

  return (
    <>
      {
      nowPage === 1 ? 
      <RentalStep1 
        setNowPage={setNowPage} 
        bookId={bookId}
      />:null
      }

      {
      nowPage === 2 ? 
      <RentalStep2
        setNowPage={setNowPage}
        bookId={bookId} 
      />:null
      }
    </>
  )
}

export default BookRental