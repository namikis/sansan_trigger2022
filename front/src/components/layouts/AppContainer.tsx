import React from 'react'

const AppContainer:React.FC<{children:React.ReactNode;}> = ({children}) => {
  return (
    <div className="container mx-auto my-4 md:px-12 lg:px-24">
      {children}
    </div>
  )
}

export default AppContainer