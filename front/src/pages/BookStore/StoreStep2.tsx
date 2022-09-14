import React from 'react'
import StepBar from '../../components/molecules/Bar/StepBar'
import AppHeader from '../../components/layouts/AppHeader'
import UserInfoForm from '../../components/templates/BookStore/UserInputForm'

const StoreStep2 = () => {
  return (
    <div className=''>
      <AppHeader isLogin={false}/>
      <div className='bg-gray-100 h-screen'>
        <UserInfoForm />
        <StepBar w1="100%" w2="20%"/>
      </div>
    </div>
  )
}

export default StoreStep2