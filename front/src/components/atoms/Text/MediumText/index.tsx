import React from 'react'

const index:React.FC<{text:string, color:string}> = ({text, color}) => {
  return (
    <>
        <h1 className={`title-font text-xl font-medium ${color} mb-3`}>
            {text ? text : "タイトル"}
        </h1>
    </>
  )
}

export default index