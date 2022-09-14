import React from 'react'

const SubTitle:React.FC<{title?:string,color?:string}> = ({title="",color="text-gray-700"}) => {
  return (
    <h1 className={`text-xl font-base ${color}`}>
        {title}
    </h1>
  )
}

export default SubTitle;