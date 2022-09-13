import React from 'react'

const index:React.FC<{text:string, color:string}> = ({text,color}) => {
  return (
    <>
        <h2 className={`tracking-widest title-font font mb-1 ${color}`}>
        {text ? text : "タイトル"}
        </h2>
    </>
  )
}

export default index
