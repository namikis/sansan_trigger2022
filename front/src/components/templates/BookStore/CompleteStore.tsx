import React from 'react'
import { Link } from 'react-router-dom';

import DefaultButton from '../../atoms/Button/DefaultButton'
import MainTitle from '../../atoms/Title/MainTitle';
import SubTitle from '../../atoms/Title/SubTitle';

import VerticalMargin from '../../atoms/Margin/VerticaMargin';
import {storeStepType} from "../../../pages/BookStore/BookStore";


const CompleteStore:React.FC<storeStepType>= () => {
  return (
    <div className=" py-32 px-10">
      <div className="p-10 md:w-3/4 lg:w-1/2 mx-auto shadow-xl rounded-xl bg-white">
        <div className="text-center">
          <MainTitle title='応募完了'/>
          <VerticalMargin y="12" />
          <SubTitle title='ご利用いただきありがとうございます'/>
          <VerticalMargin y="4" />
          <SubTitle title='識別番号 : 4FD49V'/>
          <VerticalMargin y="12" />
          <Link to={"/"}>
            <DefaultButton text={"Topへ戻る"} color="bg-gray-400"/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CompleteStore