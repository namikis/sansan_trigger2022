import React from 'react'
import Lottie from "lottie-react";
import searchAnimation from "../../../../assets/lottie/65089-book-search.json";

const SearchLottie = () => {
  return (
    <div className='w-32 md:w-72'>
      <Lottie animationData={searchAnimation} loop={true} />
    </div>
  )
}

export default SearchLottie
