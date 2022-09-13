import React from 'react';
import Header from '../components/layouts/Header';
import BookList from '../components/templates/BookList';
import banner from '../assets/images/banner.png';

const TopPage = () => {
  return (
    <div>
      <Header isLogin={false} />
      <div className="container mx-auto my-4 px-4">
        <img className="py-6 lg:h-96 md:h-72 w-full object-cover object-center" src={banner} alt="blog" />
        <h1 className="text-3xl font-bold">
          おすすめの本
        </h1>
        <BookList />
      </div>
    </div>
  );
}

export default TopPage;
