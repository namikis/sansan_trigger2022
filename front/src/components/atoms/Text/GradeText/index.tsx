import React from 'react'

type GradeTextPropsType = {
  text?: string;
  color?: string;
  inlineBlock?: boolean;
  grade?: number;
}

const GradeText = ({text="", color="", inlineBlock=true, grade=2}: GradeTextPropsType) => {
  switch(grade) {
    case 1:
      return <div className={`title-font text-sm ${color} ${inlineBlock && "inline-block mr-1"}`}>{text}</div>;
    case 2:
      return <div className={`title-font text-base ${color} ${inlineBlock && "inline-block mr-1"}`}>{text}</div>;
    case 3:
      return <div className={`title-font text-xl ${color} ${inlineBlock && "inline-block mr-1"}`}>{text}</div>;
    case 4:
      return <div className={`title-font text-4xl ${color} ${inlineBlock && "inline-block mr-1"}`}>{text}</div>;
    default:
      return <div className={`title-font text-base ${color} ${inlineBlock && "inline-block mr-1"}`}>{text}</div>;
            
  }

}

export default GradeText
