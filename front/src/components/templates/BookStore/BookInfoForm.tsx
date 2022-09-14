import React from 'react'
import { Link } from 'react-router-dom';

import DefaultInput from '../../molecules/Input/DefaultInput'
import DefaultButton from '../../atoms/Button/DefaultButton'


const BookInfoForm = () => {
  return (
    <div className=" py-32 px-10">
      <div className="p-10 md:w-3/4 lg:w-1/2 mx-auto shadow-xl rounded-xl bg-white">
        <form action="" className=''>
          <DefaultInput label='本のISBN' placeholder='本のISBN'/>
          <DefaultInput label='本のジャンル' placeholder='本のジャンル'/>

          <div className="mb-5"></div>
      
          <div className="text-right">
          <Link to={"/step2"}>
            <DefaultButton text={"次へ"} color="bg-brown-base"/>
          </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BookInfoForm