import React from 'react'

const SubTitle:React.FC<{title:string}> = ({title}) => {
  return (
    <h1 className="text-3xl font-bold text-gray-700">
        {title}
    </h1>
  )
}

export default SubTitle;