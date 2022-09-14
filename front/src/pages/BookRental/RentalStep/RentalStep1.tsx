import React from 'react'
import StepBar2 from '../../../components/molecules/Bar/StepBar2'
import AppHeader from '../../../components/layouts/AppHeader'
import BookInfoForm from '../../../components/templates/BookStore/BookInfoForm'
import {rentalStepType} from "../BookRental";

import ConfirmForm from '../../../components/templates/BookRental/ConfirmForm';

const RentalStep1:React.FC<rentalStepType> = ({setNowPage}) => {
  return (
    <div className=''>
      <AppHeader isLogin={false}/>
      <div className='bg-gray-100 h-screen'>
        <ConfirmForm setNowPage={setNowPage} />
        <StepBar2 w1="40%"/>
      </div>
    </div>
  )
}

export default RentalStep1