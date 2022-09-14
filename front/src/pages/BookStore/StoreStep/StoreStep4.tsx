import React,{useEffect, useState} from 'react'
import StepBar from '../../../components/molecules/Bar/StepBar'
import AppHeader from '../../../components/layouts/AppHeader'
import CompleteStore from '../../../components/templates/BookStore/CompleteStore'

import {storeStepType} from "../BookStore";
import SubTitle from '../../../components/atoms/Title/SubTitle';
import appHeaderImg from "../../../assets/images/header.png"

const StoreStep4:React.FC<storeStepType> = ({setNowPage,setStoreInfo,storeInfo}) => {
  const [load, setLoad] = useState<boolean>(true);

  const sleep = (waitTime:number) => new Promise( resolve => setTimeout(resolve, waitTime) );


  (async ()=>{
    await sleep( 1500 );
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
              <SubTitle title='少々お待ちください'/>
            </div>
          </div>
        </div>
        </>
        :
        <>
          <CompleteStore setNowPage={setNowPage} setStoreInfo={setStoreInfo} storeInfo={storeInfo}/>
          <StepBar w1="100%" w2="100%" w3="100%"/>
        </>
      }
      </div>
    </div>
  )
}

export default StoreStep4