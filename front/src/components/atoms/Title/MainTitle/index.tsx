import React from 'react'

const MainTitle:React.FC<{title:string}> = ({title})=> {
  return (
    <h1 className="text-4xl md:text-5xl font-base text-gray-200">
        {title}
    </h1>
  )
}

export default MainTitle