import React from 'react'
import { Link } from 'react-router-dom';

import MediumText from "../../../atoms/Text/MediumText"
import SmallText from "../../../atoms/Text/SmallText"
import BookImage from "../../../atoms/Image/BookImage"

const index:React.FC<{index:number}> = ({index}) => {
  return (
    <div className="p-2 lg:w-1/4 md:w-1/3 my-2">
        <Link to={`/book/${index}`}>
        <div className="h-full bg-brown-base rounded-lg overflow-hidden shadow-lg">
            <BookImage />
            <div className='border border-gray-200 my-1 mx-1'></div>
            <div className="p-6 bg-brown-llight">
                <MediumText text={"入門 Python3"} color='text-brown-dark' margin={false} />
                <SmallText text={"sub sub sub"} color='text-brown-dark' margin={false} />
            </div>
        </div>
        </Link>
    </div>
  )
}

export default index