import React from 'react'
import StepBar from '../../../components/molecules/Bar/StepBar'
import AppHeader from '../../../components/layouts/AppHeader'
import ConfirmForm from '../../../components/templates/BookStore/ConfirmForm'

import {storeStepType} from "../BookStore";


const StoreStep3:React.FC<storeStepType> = ({setNowPage,setStoreInfo,storeInfo}) => {
  return (
    <div className=''>
      <AppHeader isLogin={false}/>
      <div className='bg-gray-100 h-screen'>
        <ConfirmForm setNowPage={setNowPage} setStoreInfo={setStoreInfo} storeInfo={storeInfo}/>
        <StepBar w1="100%" w2="100%" w3="60%"/>
      </div>
    </div>
  )
}

export default StoreStep3