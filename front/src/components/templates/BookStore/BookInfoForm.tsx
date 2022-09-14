import React from 'react'

import DefaultInput from '../../molecules/Input/DefaultInput'
import DefaultButton from '../../atoms/Button/DefaultButton'

import {storeStepType} from "../../../pages/BookStore/BookStore";

const BookInfoForm:React.FC<storeStepType> = ({setNowPage,setStoreInfo,storeInfo}) => {
  return (
    <div className=" py-32 px-10">
      <div className="p-10 md:w-3/4 lg:w-1/2 mx-auto shadow-xl rounded-xl bg-white">
        <form action="" className=''>
          <DefaultInput 
            label='本のISBN'
            placeholder='本のISBN'
            onChangeFunc={(e:any)=>{
              setStoreInfo({...storeInfo, isbn:e.target.value});
            }}
          />
          <DefaultInput 
            label='本のジャンル' 
            placeholder='本のジャンル'
            onChangeFunc={(e:any)=>{
              setStoreInfo({...storeInfo, genre:e.target.value});
            }}
          />

          <div className="mb-5"></div>
      
          <div className="text-right">
          <a onClick={()=>{setNowPage(2)}}>
            <DefaultButton text={"次へ"} color="bg-brown-base"/>
          </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BookInfoForm