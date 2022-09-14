import React from 'react'
import StepBar from '../../../components/molecules/Bar/StepBar'
import AppHeader from '../../../components/layouts/AppHeader'
import BookInfoForm from '../../../components/templates/BookStore/BookInfoForm'
import {storeStepType} from "../BookStore";

const StoreStep1:React.FC<storeStepType> = ({setNowPage,setStoreInfo,storeInfo}) => {

  return (
    <div className=''>
      <AppHeader isLogin={false}/>
      <div className='bg-gray-100 h-screen'>
        <BookInfoForm setNowPage={setNowPage} setStoreInfo={setStoreInfo} storeInfo={storeInfo}/>
        <StepBar w1="40%"/>
      </div>
    </div>
  )
}

export default StoreStep1