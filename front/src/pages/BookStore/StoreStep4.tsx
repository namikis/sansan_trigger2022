import React from 'react'
import StepBar from '../../components/molecules/Bar/StepBar'
import AppHeader from '../../components/layouts/AppHeader'
import CompleteStore from '../../components/templates/BookStore/CompleteStore'

const StoreStep3 = () => {
  return (
    <div className=''>
      <AppHeader isLogin={false}/>
      <div className='bg-gray-100 h-screen'>
      <CompleteStore />
        <StepBar w1="100%" w2="100%" w3="100%"/>
      </div>
    </div>
  )
}

export default StoreStep3