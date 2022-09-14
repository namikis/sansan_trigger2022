import React from 'react'
import { Link } from 'react-router-dom';

import DefaultButton from '../../atoms/Button/DefaultButton'
import MainTitle from '../../atoms/Title/MainTitle';
import SubTitle from '../../atoms/Title/SubTitle';

import VerticalMargin from '../../atoms/Margin/VerticaMargin';
import { rentalStepType } from '../../../pages/BookRental/BookRental';

import appHeaderImg from "../../../assets/images/header.png"


const CompleteRental:React.FC<rentalStepType>= ({setNowPage}) => {
  return (
    <div className=" py-32 px-10">
      <div className="p-10 md:w-3/4 lg:w-1/2 mx-auto shadow-xl rounded-xl bg-white">
        <div className="text-center">
          <div className='justify-center flex'>
            <img src={appHeaderImg} alt="" />
          </div>
          <VerticalMargin y="8" />
          <MainTitle title='申し込み完了'/>
          <VerticalMargin y="12" />
          <SubTitle title='ご利用いただきありがとうございます📚'/>
          <VerticalMargin y="4" />
          <SubTitle title='技術書の到着予定 : 2022/9/31'/>
          <VerticalMargin y="12" />
          <Link to={"/"}>
            <DefaultButton text={"Topへ戻る"} color="bg-gray-400"/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CompleteRental