import React from 'react'

const MainTitle:React.FC<{title?:string,color?:string}> = ({title="",color="text-gray-700"})=> {
  return (
    <h1 className={`text-4xl md:text-5xl font-base ${color}`}>
        {title}
    </h1>
  )
}

export default MainTitle