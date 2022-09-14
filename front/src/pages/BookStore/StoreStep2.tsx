import React from 'react'
import StepBar from '../../components/molecules/Bar/StepBar'
import Header from '../../components/layouts/Header'
import UserInfoForm from '../../components/templates/BookStore/UserInputForm'

const StoreStep2 = () => {
  return (
    <div className=''>
      <Header isLogin={false}/>
      <div className='bg-gray-100 h-screen'>
        <UserInfoForm />
        <StepBar w1="100%" w2="20%"/>
      </div>
    </div>
  )
}

export default StoreStep2