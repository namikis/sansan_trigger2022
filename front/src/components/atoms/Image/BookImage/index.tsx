import React from 'react'

import icon from '../../../../assets/images/book.jpeg';

const BookImage:React.FC<{imgUrl?:string}> = ({imgUrl=icon}) => {
  return (
    <>
      <div className='my-2'>
        <img className="object-contain object-center h-32 lg:h-60 md:h-48 mx-auto shadow-2xl" src={imgUrl} alt="blog" />
      </div>
    </>
  )
}

export default BookImage;