import React from 'react'

const VerticalMargin:React.FC<{y?:string}> = ({y="5"}) => {
  return (
    <div className={`my-${y}`}></div>
  )
}

export default VerticalMargin