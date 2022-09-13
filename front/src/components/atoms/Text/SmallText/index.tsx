import React from 'react'

const index:React.FC<{title:string}> = ({title}) => {
  return (
    <>
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
        {title ? title : "タイトル"}
        </h2>
    </>
  )
}

export default index
