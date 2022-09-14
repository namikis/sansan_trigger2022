import React from 'react'
import StepBar from '../../components/molecules/Bar/StepBar'
import Header from '../../components/layouts/Header'
import ConfirmForm from '../../components/templates/BookStore/ConfirmForm'

const StoreStep3 = () => {
  return (
    <div className=''>
      <Header isLogin={false}/>
      <div className='bg-gray-100 h-screen'>
        <ConfirmForm />
        <StepBar w1="100%" w2="100%" w3="60%"/>
      </div>
    </div>
  )
}

export default StoreStep3