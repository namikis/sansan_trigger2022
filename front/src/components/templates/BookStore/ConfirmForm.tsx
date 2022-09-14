import React from 'react'
import { Link } from 'react-router-dom';

import DefaultButton from '../../atoms/Button/DefaultButton'
import DefaultConfirm from '../../molecules/Input/DefaultConfirm';

const ConfirmForm = () => {
  return (
    <div className=" py-32 px-10">
      <div className="p-10 md:w-3/4 lg:w-1/2 mx-auto shadow-xl rounded-xl bg-white">
        <form action="" className=''>
          <DefaultConfirm label='氏名' value='hoge hoge hoge'/>
          <DefaultConfirm label='住所' value='hoge hoge hoge'/>
          <DefaultConfirm label='電話番号' value='hoge hoge hoge'/>
          <DefaultConfirm label='メールアドレス' value='hoge hoge hoge'/>

          <div className="mb-10"></div>

          <div className="text-right grid grid-cols-2">
            <Link to={"/step2"}>
              <DefaultButton text={"戻る"} color="bg-gray-400"/>
            </Link>
            <Link to={"/step4"}>
              <DefaultButton text={"登録"} color="bg-brown-base"/>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ConfirmForm