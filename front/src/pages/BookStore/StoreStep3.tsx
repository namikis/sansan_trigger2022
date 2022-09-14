import React from 'react'
import StepBar from '../../components/molecules/Bar/StepBar'
import AppHeader from '../../components/layouts/AppHeader'
import ConfirmForm from '../../components/templates/BookStore/ConfirmForm'

const StoreStep3 = () => {
  return (
    <div className=''>
      <AppHeader isLogin={false}/>
      <div className='bg-gray-100 h-screen'>
        <ConfirmForm />
        <StepBar w1="100%" w2="100%" w3="60%"/>
      </div>
    </div>
  )
}

export default StoreStep3