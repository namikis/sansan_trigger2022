import React,{useState} from 'react'

import RentalStep1 from './RentalStep/RentalStep1'
import RentalStep2 from './RentalStep/RentalStep2'


export type rentalStepType = {
  setNowPage:React.Dispatch<React.SetStateAction<number>>;
}

const BookRental = () => {
  const [nowPage, setNowPage] = useState<number>(1);

  return (
    <>
      {
      nowPage === 1 ? 
      <RentalStep1 
        setNowPage={setNowPage} 
      />:null
      }

      {
      nowPage === 2 ? 
      <RentalStep2
        setNowPage={setNowPage} 
      />:null
      }
    </>
  )
}

export default BookRental