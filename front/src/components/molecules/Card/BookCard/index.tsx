import React from 'react'
import { Link } from 'react-router-dom';

import MediumText from "../../../atoms/Text/MediumText"
import SmallText from "../../../atoms/Text/SmallText"
import BookImage from "../../../atoms/Image/BookImage"

const index:React.FC<{index:number}> = ({index}) => {
  return (
    <div className="p-1 lg:w-1/5 md:w-1/3">
        <Link to={`/book/${index}`}>
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <BookImage />
            <div className="p-6">
                <MediumText text={"タイトル タイトル タイトル"}/>
                <SmallText text={""}/>
            </div>
        </div>
        </Link>
    </div>
  )
}

export default index