import React from 'react'

const MessageText:React.FC<{text:string, color:string}> = ({text, color}) => {
  return (
    <>
        <h1 className={`font-light text-xl font-medium ${color} my-3`}>
            {text ? text : "タイトル"}
        </h1>
    </>
  )
}

export default MessageText