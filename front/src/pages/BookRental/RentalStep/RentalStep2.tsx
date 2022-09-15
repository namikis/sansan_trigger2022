import React,{useState} from 'react'
import StepBar2 from '../../../components/molecules/Bar/StepBar2'
import AppHeader from '../../../components/layouts/AppHeader'
import {rentalStepType} from "../BookRental";
import CompleteRental from '../../../components/templates/BookRental/CompleteRental';
import SubTitle from '../../../components/atoms/Title/SubTitle';

import appHeaderImg from "../../../assets/images/header.png";

const RentalStep2:React.FC<rentalStepType> = ({setNowPage, bookId}) => {
  const sleep = (waitTime:number) => new Promise( resolve => setTimeout(resolve, waitTime) );
  const [load, setLoad] = useState<boolean>(true);
  (async ()=>{
    await sleep( 3000 );
    // get hogehoge...
    setLoad(false);
  })()

  return (
    <div className=''>
      <AppHeader isLogin={false}/>
      <div className='bg-gray-100 h-screen'>
      {
        load?
        <>
        <div className=" py-32 px-10">
          <div className="p-10 md:w-3/4 lg:w-1/2 mx-auto shadow-xl rounded-xl bg-white">
            <div className='justify-center flex'>
              <img src={appHeaderImg} alt="" />
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mt-8 mb-12">
                <div className="animate-spin h-16 w-16 border-4 border-brown-base rounded-full border-t-transparent"></div>
              </div>
              <SubTitle title='少々お待ちください...' color='text-gray-600'/>
            </div>
          </div>
        </div>
        </>
        :
        <>
          <CompleteRental setNowPage={setNowPage} bookId={bookId} />
          <StepBar2 w1="100%" w2="100%"/>
        </>
      }
      </div>
    </div>
  )
}

export default RentalStep2