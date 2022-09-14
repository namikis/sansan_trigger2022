import React from 'react'

type BigTextPropsType = {
  text?: string;
  color?: string;
  margin?: boolean;
}

const BigText:React.FC<BigTextPropsType> = ({text="", color="", margin=true}) => {
  return (
    <>
        <h2 className={`title-font text-xl font-medium ${color} ${margin && "mb-3"}`}>
        {text ? text : "タイトル"}
        </h2>
    </>
  )
}

export default BigText;
