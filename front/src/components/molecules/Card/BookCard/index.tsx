import React from 'react'
import { Link } from 'react-router-dom';

import MediumText from "../../../atoms/Text/MediumText"
import SmallText from "../../../atoms/Text/SmallText"
import BookImage from "../../../atoms/Image/BookImage"

type bookType = {
  title:string;
  description:string;
  imgUrl:string;
}

const BookCard:React.FC<{index:number,book:bookType}> = ({index,book}) => {
  return (
    <div className="p-2 lg:w-1/4 md:w-1/3 my-2">
        <Link to={`/book/${index}`}>
        <div className="h-full bg-brown-base hover:bg-brown-base-shadow rounded-lg overflow-hidden shadow-lg">
            <BookImage imgUrl={book.imgUrl}/>
            <div className='border border-gray-200 my-1 mx-1'></div>
            <div className="p-6 bg-brown-llight h-full">
                <MediumText text={book.title} color='text-brown-dark' margin={false} />
                <SmallText text={book.description} color='text-brown-dark' margin={false} />
            </div>
        </div>
        </Link>
    </div>
  )
}

export default BookCard