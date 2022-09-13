import React from 'react'

const index:React.FC<{title:string}> = ({title}) => {
  return (
    <>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {title ? title : "タイトル"}
        </h1>
    </>
  )
}

export default index