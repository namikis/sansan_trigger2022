import { faL } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

type MediumTextPropsType = {
  text?: string;
  color?: string;
  margin?: boolean;
  inlineBlock?: boolean;
}

const MediumText:React.FC<MediumTextPropsType> = ({text="", color="", margin=true, inlineBlock=false}) => {
  return (
    <div className={`title-font text-xl font-medium ${color} ${margin && "mb-3"} ${inlineBlock && "inline-block"}`}>
        {text ? text : "タイトル"}
    </div>
)
}

export default MediumText