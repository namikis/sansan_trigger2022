import React from 'react'
import { Link } from 'react-router-dom';
import sampleBookImg from "../../../assets/images/book.jpeg"

import DefaultButton from '../../atoms/Button/DefaultButton'
import DefaultConfirm from '../../molecules/Input/DefaultConfirm';
import VerticalMargin from '../../atoms/Margin/VerticaMargin';

import { rentalStepType } from '../../../pages/BookRental/BookRental';
import MainTitle from '../../atoms/Title/MainTitle';
import BookImage from '../../atoms/Image/BookImage';
import BookCard from '../../molecules/Card/BookCard';
import SubTitle from '../../atoms/Title/SubTitle';

const ConfirmForm:React.FC<rentalStepType> = ({setNowPage}) => {
  return (
    <div className=" py-32 px-10">
      <div className="p-10 md:w-3/4 lg:w-1/2 mx-auto shadow-xl rounded-xl bg-white">
        <form action="" className=''>
          <div className="mb-10"></div>

          <div className='text-center mb-12'>
            <MainTitle title='この本を借りますか?' color='text-gray-600'/>
            <div className='mb-8'></div>
            <BookImage imgUrl={sampleBookImg} />
            <div className='mb-8'></div>
            <SubTitle title='入門Python3' color='text-gray-800' />
            <div className='mb-2'></div>
            <div className='text-gray-600'>
              データサイエンスやウェブ開発、セキュリティなど
            </div>
          </div>


          <div className="text-center grid grid-cols-2">
            <a onClick={()=>{setNowPage(1)}}>
              <DefaultButton text={"戻る"} color="bg-gray-400"/>
            </a>
            <a onClick={()=>{setNowPage(2)}}>
              <DefaultButton text={"借りる"} color="bg-brown-base"/>
            </a>
          </div>

        </form>
      </div>
    </div>
  )
}

export default ConfirmForm