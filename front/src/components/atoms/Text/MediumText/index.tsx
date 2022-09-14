import React from 'react'

type MediumTextPropsType = {
  text?: string;
  color?: string;
  margin?: boolean;
}

const index:React.FC<MediumTextPropsType> = ({text="", color="", margin=true}) => {
  return (
    <>
        <h1 className={`title-font text-xl font-medium ${color} ${margin && "mb-3"}`}>
            {text ? text : "タイトル"}
        </h1>
    </>
  )
}

export default index