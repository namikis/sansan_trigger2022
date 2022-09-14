import React from 'react'

const DefaultButton:React.FC<{text:string,color:string}> = ({text,color}) => {
  return (
    <button className={`py-3 px-8 ${color} text-white font-bold rounded`}>{text}</button>
  )
}

export default DefaultButton