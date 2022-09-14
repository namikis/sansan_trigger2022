import React from 'react'
import { Link } from 'react-router-dom';

import DefaultInput from '../../molecules/Input/DefaultInput'
import DefaultButton from '../../atoms/Button/DefaultButton'


const UserInfoForm = () => {
  return (
    <div className=" py-32 px-10">
      <div className="p-10 md:w-3/4 lg:w-1/2 mx-auto shadow-xl rounded-xl bg-white">
        <form action="" className=''>
          <DefaultInput label='氏名' placeholder='フルネーム'/>
          <DefaultInput label='住所' placeholder='住所'/>
          <DefaultInput label='電話番号' placeholder='-(ハイフン)あり'/>
          <DefaultInput label='メールアドレス' placeholder='メールアドレス'/>

          <div className="mb-10"></div>

          <div className="text-right grid grid-cols-2">
            <Link to={"/step1"}>
              <DefaultButton text={"戻る"} color="bg-gray-400"/>
            </Link>
            <Link to={"/step3"}>
              <DefaultButton text={"確認画面へ"} color="bg-brown-base"/>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserInfoForm