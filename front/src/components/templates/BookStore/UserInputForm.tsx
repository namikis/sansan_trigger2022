import React from 'react'

import DefaultInput from '../../molecules/Input/DefaultInput'
import DefaultButton from '../../atoms/Button/DefaultButton'
import {storeStepType} from "../../../pages/BookStore/BookStore";


const UserInfoForm:React.FC<storeStepType> = ({setNowPage,setStoreInfo,storeInfo}) => {
  return (
    <div className=" py-32 px-10">
      <div className="p-10 md:w-3/4 lg:w-1/2 mx-auto shadow-xl rounded-xl bg-white">
        <form action="" className=''>
          <DefaultInput 
            label='氏名' 
            placeholder='フルネーム' 
            onChangeFunc={(e:any)=>{
              setStoreInfo({...storeInfo, name:e.target.value});
            }}
          />

          <DefaultInput 
            label='住所' 
            placeholder='住所' 
            onChangeFunc={(e:any)=>{
              setStoreInfo({...storeInfo, address:e.target.value});
            }}
          />

          <DefaultInput 
            label='電話番号' 
            placeholder='ハイフンあり' 
            onChangeFunc={(e:any)=>{
              setStoreInfo({...storeInfo, tel:e.target.value});
            }}
          />

          <DefaultInput 
            label='メールアドレス' 
            placeholder='メールアドレス' 
            onChangeFunc={(e:any)=>{
              setStoreInfo({...storeInfo, mail:e.target.value});
            }}
          />

          <div className="mb-10"></div>

          <div className="text-right grid grid-cols-2">
            <a onClick={()=>{setNowPage(1)}}>
              <DefaultButton text={"戻る"} color="bg-gray-400"/>
            </a>
            <a onClick={()=>{setNowPage(3)}}>
              <DefaultButton text={"確認画面へ"} color="bg-brown-base"/>
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserInfoForm