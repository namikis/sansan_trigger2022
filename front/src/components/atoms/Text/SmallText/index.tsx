import React from 'react'

type SmallTextPropsType = {
  text?: string;
  color?: string;
  margin?: boolean;
  inlineBlock?: boolean;
}

const SmallText:React.FC<SmallTextPropsType> = ({text="", color="", margin=true, inlineBlock=false}) => {
  return (
    <div className={`tracking-widest title-font ${color} ${margin && "mb-1"} ${inlineBlock && "inline-block"}`}>
      {text ? text : "タイトル"}
    </div>
  )
}

export default SmallText
