import React from 'react'
import {storeInfoType} from "../../../../pages/BookStore/BookStore"

type DefaultInputType = {
  label:string;
  placeholder:string;
  onChangeFunc:any;
}

const DefaultInput:React.FC<DefaultInputType> = ({label,placeholder,onChangeFunc}) => {
  return (
    <div className="flex items-center mb-5">
      <label className="inline-block w-32 mr-8 text-right 
                              font-bold text-gray-600">{label}</label>
      <input type="text" id="name" name="name" placeholder={`${placeholder}`}
            className="flex-1 py-2 border-b-2 border-gray-400 focus:border-brown-base 
                    text-gray-600 placeholder-gray-400
                    outline-none"
            onChange={onChangeFunc}
      />
    </div>
  )
}

export default DefaultInput