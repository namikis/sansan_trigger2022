import React,{useState} from 'react'

import StoreStep1 from './StoreStep/StoreStep1';
import StoreStep2 from './StoreStep/StoreStep2';
import StoreStep3 from './StoreStep/StoreStep3';
import StoreStep4 from './StoreStep/StoreStep4';

export type storeInfoType = {
  isbn?:string;
  genre?:string;
  name?:string;
  address?:string;
  tel?:string;
  mail?:string;
}

export type storeStepType = {
  setNowPage:React.Dispatch<React.SetStateAction<number>>;
  setStoreInfo:React.Dispatch<React.SetStateAction<storeInfoType | undefined>>;
  storeInfo?:storeInfoType;
}

const BookStore = () => {
  const [nowPage, setNowPage] = useState<number>(1);
  const [storeInfo, setStoreInfo] = useState<storeInfoType>();

  return (
    <div>
      {
      nowPage === 1 ? 
      <StoreStep1 
        setNowPage={setNowPage} 
        setStoreInfo={setStoreInfo} 
        storeInfo={storeInfo}
      />:null
      }

      {
      nowPage === 2 ? 
      <StoreStep2
        setNowPage={setNowPage} 
        setStoreInfo={setStoreInfo} 
        storeInfo={storeInfo}
      />:null
      }

      {
      nowPage === 3 ? 
      <StoreStep3
        setNowPage={setNowPage} 
        setStoreInfo={setStoreInfo} 
        storeInfo={storeInfo}
      />:null
      }

      {
      nowPage === 4 ? 
      <StoreStep4
        setNowPage={setNowPage} 
        setStoreInfo={setStoreInfo} 
        storeInfo={storeInfo}
      />:null
      }
    </div>
  )
}

export default BookStore
