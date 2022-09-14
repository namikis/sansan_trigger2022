import React from 'react'
import StepBar from '../../components/molecules/Bar/StepBar'
import Header from '../../components/layouts/Header'
import BookInfoForm from '../../components/templates/BookStore/BookInfoForm'

const StoreStep1 = () => {
  return (
    <div className=''>
      <Header isLogin={false}/>
      <div className='bg-gray-100 h-screen'>
        <BookInfoForm />
        <StepBar w1="40%"/>
      </div>
    </div>
  )
}

export default StoreStep1