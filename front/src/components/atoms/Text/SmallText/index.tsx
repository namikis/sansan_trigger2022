import React from 'react'

type SmallTextPropsType = {
  text?: string;
  color?: string;
  margin?: boolean;
}

const index:React.FC<SmallTextPropsType> = ({text="", color="", margin=true}) => {
  return (
    <>
        <h2 className={`tracking-widest title-font font mb-1 ${color}`}>
        {text ? text : "タイトル"}
        </h2>
    </>
  )
}

export default index
