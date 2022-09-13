import React from 'react'

const index:React.FC<{text:string}> = ({text}) => {
  return (
    <>
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
        {text ? text : "タイトル"}
        </h2>
    </>
  )
}

export default index
