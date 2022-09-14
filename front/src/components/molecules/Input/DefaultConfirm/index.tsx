import React from 'react'

const DefaultConfirm:React.FC<{label:string,value:string}> = ({label,value}) => {
  return (
    <div className="flex items-center mb-5">
      <label className="inline-block w-32 mr-12 text-right 
                              font-bold text-gray-600">{label}</label>
      <p className='flex-1 py-2 text-gray-600 placeholder-gray-400 outline-none'>
          {value}
      </p>
    </div>
  )
}

export default DefaultConfirm;