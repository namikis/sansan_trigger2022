import React from 'react'

//w1,w2,w3 はwitdhの%
const StepBar:React.FC<{w1?:string,w2?:string,w3?:string}> = ({w1,w2,w3}) => {
  return (
    <div className="max-w-xl mx-auto my-4 pb-4">	
      <div className="flex pb-3">
        <div className="flex-1">
        </div>
    
        <div className="flex-1">
          <div className={`w-10 h-10 ${w1 ? "bg-brown-base" : "bg-white"} mx-auto rounded-full text-lg text-white flex items-center`}>
            <span className="text-white text-center w-full"><i className="fa fa-check w-full fill-current white"></i></span>
          </div>
        </div>
    
    
        <div className="w-1/6 align-center items-center align-middle content-center flex">
          <div className="w-full bg-gray-300 rounded items-center align-middle align-center flex-1">
             <div className="bg-brown-light text-xs leading-none py-1 text-center text-grey-darkest rounded " style={{width: w1 ? w1 : "0%"}}></div>
          </div>
        </div>
      
        
        <div className="flex-1">
          <div className={`w-10 h-10 ${w2 ? "bg-brown-base" : "bg-white"} mx-auto rounded-full text-lg text-white flex items-center`}>
            <span className="text-white text-center w-full"><i className="fa fa-check w-full fill-current white"></i></span>
          </div>
        </div>
      
        <div className="w-1/6 align-center items-center align-middle content-center flex">
          <div className="w-full bg-gray-300 rounded items-center align-middle align-center flex-1">
             <div className="bg-brown-light text-xs leading-none py-1 text-center text-grey-darkest rounded " style={{width: w2 ? w2 : "0%"}}></div>
          </div>
        </div>
      
        <div className="flex-1">
          <div className={`w-10 h-10 ${w3 ? "bg-brown-base" : "bg-white"} mx-auto rounded-full text-lg text-white flex items-center`}>
            <span className="text-grey-darker text-center w-full"></span>
          </div>
        </div>
      
      
        <div className="w-1/6 align-center items-center align-middle content-center flex">
          <div className="w-full bg-gray-300 rounded items-center align-middle align-center flex-1">
             <div className="bg-brown-light text-xs leading-none py-1 text-center text-grey-darkest rounded " style={{width: w3 ? w3 : "0%"}}></div>
          </div>
        </div>
    
    
        <div className="flex-1">
          <div className={`w-10 h-10 ${w3==="100%" ? "bg-brown-base" : "bg-white"} mx-auto rounded-full text-lg text-white flex items-center`}>
            <span className="text-grey-darker text-center w-full"></span>
          </div>
        </div>
      
      
        <div className="flex-1">
        </div>
      </div>
      
      <div className="flex text-xs content-center text-center text-gray-600">
        <div className="w-1/4">
          本の情報を登録
        </div>
        
        <div className="w-1/4">
          ユーザー情報の入力
        </div>
        
        <div className="w-1/4">
          入力情報の確認
        </div>
        
        <div className="w-1/4">
          完了
        </div>
      </div>
    </div>
  )
}

export default StepBar