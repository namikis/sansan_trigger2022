import React from 'react'

const index:React.FC<{text:string}> = ({text}) => {
  return (
    <>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {text ? text : "タイトル"}
        </h1>
    </>
  )
}

export default index