import React from 'react'
import StepBar from '../../components/molecules/Bar/StepBar'
import AppHeader from '../../components/layouts/AppHeader'
import BookInfoForm from '../../components/templates/BookStore/BookInfoForm'

const StoreStep1 = () => {
  return (
    <div className=''>
      <AppHeader isLogin={false}/>
      <div className='bg-gray-100 h-screen'>
        <BookInfoForm />
        <StepBar w1="40%"/>
      </div>
    </div>
  )
}

export default StoreStep1