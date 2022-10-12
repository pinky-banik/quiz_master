import React from 'react';
import banner from '../assets/banner.jpg';

const Banner = () => {
  return (
    <div className='md:flex my-10'>
      <div className='md:w-1/2 lg:w-1/3 mx-auto'> 
      <img src={banner} alt="banner" />
      </div>
      <div className='flex justify-center items-center w-full'>
        <div className='p-10'>
          <h1 className='md:text-5xl text-4xl font-bold text-primary'>The Quiz Master</h1> 
          <p className='py-3 text-gray-500 text-lg'>The phenomenon of online quizzes has been booming for years now. Whether you just like to take them for fun as a stress reliever or want to get a little insight into your personality the internet has got you covered no matter what your interest is. Multiple question types or ones where you have to guess the answer - quiz types for all kinds of quiz takers come abundantly online.</p>
        </div>
      </div>
      
    </div>
  );
};

export default Banner;