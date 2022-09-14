import React from 'react'

type BigTextPropsType = {
  text?: string;
  color?: string;
  margin?: boolean;
  inlineBlock?: boolean
}

const BigText:React.FC<BigTextPropsType> = ({text="", color="", margin=true, inlineBlock=false}) => {
  return (
    <div className={`title-font text-xl font-medium ${color} ${margin && "mb-3"}`}>
      {text ? text : "タイトル"}
    </div>
  )
}

export default BigText;
