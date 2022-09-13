import React from 'react'

const AppContainer:React.FC<{children:React.ReactNode;}> = ({children}) => {
  return (
    <div className="container mx-auto my-4 lg:px-12">
      {children}
    </div>
  )
}

export default AppContainer