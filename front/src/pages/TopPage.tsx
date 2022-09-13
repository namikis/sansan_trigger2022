import React from 'react';
import Header from '../components/layouts/Header';
import BookList from '../components/templates/BookList';
import banner from '../assets/images/banner.png';


import MainTitle from '../components/atoms/Title/MainTitle';
import AppContainer from '../components/layouts/AppContainer';
import MessageText from '../components/atoms/Text/MessageText';
import BaseSearch from '../components/atoms/Search/BaseSearch';
import SearchLottie from '../components/atoms/Lottie/SearchLottie';

const TopPage = () => {
  return (
    <div>
      <Header isLogin={false} />
  
      <div className='bg-brown-light py-12'>
        <AppContainer>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='mx-auto'>
              <SearchLottie />
            </div>
            <div className='m-auto text-center'>
              <MainTitle title='hogehogehogehoge'/>
              <MessageText text='fugafuga, fugafu, fugagaga' color='text-gray-200'/>
              <div className='py-8'></div>
              <BaseSearch />
            </div>
          </div>
        </AppContainer>
      </div>

      <AppContainer>
        <div className="my-12 py-6 h-24 w-full object-cover object-center rounded-lg bg-gray-300 text-center text-xl text-gray-600" ><p>バナー</p></div>
        <BookList />
      </AppContainer>

    </div>
  );
}

export default TopPage;
