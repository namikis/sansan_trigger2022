import React from 'react'

const BigText:React.FC<{text:string}> = ({text}) => {
  return (
    <>
        <h2 className="title-font text-xl font-medium text-black mb-3">
        {text ? text : "タイトル"}
        </h2>
    </>
  )
}

export default BigText
