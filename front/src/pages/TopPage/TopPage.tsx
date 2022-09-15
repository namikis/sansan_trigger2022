import React from 'react';
import AppHeader from '../../components/layouts/AppHeader';
import BookList from '../../components/templates/TopPage/BookList';

import MainTitle from '../../components/atoms/Title/MainTitle';
import AppContainer from '../../components/layouts/AppContainer';
import MessageText from '../../components/atoms/Text/MessageText';
import BaseSearch from '../../components/atoms/Search/BaseSearch';
import SearchLottie from '../../components/atoms/Lottie/SearchLottie';
import BookImage from '../../components/atoms/Image/BookImage';
import banner from '../../assets/images/awsbanner.png';

const TopPage = () => {
  return (
    <div>
      <AppHeader isLogin={false} />
  
      <div className='bg-brown-light py-12'>
        <AppContainer>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='mx-auto'>
              <SearchLottie />
            </div>
            <div className='m-auto text-center'>
              <p className='text-gray-200 text-5xl font-bold'>
                技術書を <br/>
                <div className='mb-3'></div>
                読もう、見つけよう、<br />
                <div className='mb-3'></div>
                借りよう、預けよう。
              </p>
              <div className='mb-12'></div>
              <p className='text-gray-200 text-lg font-light'>
                技術書.comでは技術書に関わる様々なサービスを利用できます。
                <div className='mb-1'></div>
                まずは下の検索窓から、気になる単語を入力して 技術書を探してみましょう。
              </p>
              <div className='py-4'></div>
              <BaseSearch />
            </div>
          </div>
        </AppContainer>
      </div>

      <AppContainer>
        <div className='bg-gray-300 rounded-3xl'>
          <img className="mx-auto" src={banner} alt="blog" />
        </div>
        <BookList />
      </AppContainer>

    </div>
  );
}

export default TopPage;
