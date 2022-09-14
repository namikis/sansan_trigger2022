import React from 'react'
import { Link } from 'react-router-dom';

import DefaultButton from '../../atoms/Button/DefaultButton'
import DefaultConfirm from '../../molecules/Input/DefaultConfirm';
import {storeStepType} from "../../../pages/BookStore/BookStore";
import VerticalMargin from '../../atoms/Margin/VerticaMargin';

const ConfirmForm:React.FC<storeStepType> = ({setNowPage,setStoreInfo,storeInfo}) => {
  return (
    <div className=" py-32 px-10">
      <div className="p-10 md:w-3/4 lg:w-1/2 mx-auto shadow-xl rounded-xl bg-white">
        <form action="" className=''>
          <DefaultConfirm label='本のISBN' value={storeInfo?.isbn}/>
          <DefaultConfirm label='本のジャンル' value={storeInfo?.genre}/>

          <VerticalMargin y="12" />

          <DefaultConfirm label='氏名' value={storeInfo?.name}/>
          <DefaultConfirm label='住所' value={storeInfo?.address}/>
          <DefaultConfirm label='電話番号' value={storeInfo?.tel}/>
          <DefaultConfirm label='メールアドレス' value={storeInfo?.mail}/>

          <div className="mb-10"></div>

          <div className="text-right grid grid-cols-2">
            <a onClick={()=>{setNowPage(2)}}>
              <DefaultButton text={"戻る"} color="bg-gray-400"/>
            </a>
            <a onClick={()=>{setNowPage(4)}}>
              <DefaultButton text={"登録"} color="bg-brown-base"/>
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ConfirmForm