import React from 'react'
import StepBar from '../../../components/molecules/Bar/StepBar'
import AppHeader from '../../../components/layouts/AppHeader'
import UserInfoForm from '../../../components/templates/BookStore/UserInputForm'
import {storeStepType} from "../BookStore";

const StoreStep2:React.FC<storeStepType> = ({setNowPage,setStoreInfo,storeInfo}) => {
  return (
    <div className=''>
      <AppHeader isLogin={false}/>
      <div className='bg-gray-100 h-screen'>
        <UserInfoForm setNowPage={setNowPage} setStoreInfo={setStoreInfo} storeInfo={storeInfo}/>
        <StepBar w1="100%" w2="20%"/>
      </div>
    </div>
  )
}

export default StoreStep2