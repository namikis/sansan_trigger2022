import React from 'react'
import { Link } from 'react-router-dom';

import DefaultInput from '../../molecules/Input/DefaultInput'
import DefaultButton from '../../atoms/Button/DefaultButton'
import DefaultConfirm from '../../molecules/Input/DefaultConfirm';

const CompleteStore = () => {
  return (
    <div className=" py-32 px-10">
      <div className="p-10 md:w-3/4 lg:w-1/2 mx-auto shadow-xl rounded-xl bg-white">


        <div className="text-center">
          <Link to={"/"}>
            <DefaultButton text={"Topへ戻る"} color="bg-gray-400"/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CompleteStore