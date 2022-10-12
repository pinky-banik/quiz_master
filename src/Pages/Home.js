import React, { useEffect, useState } from 'react';
import TopicCard from './../components/TopicCard';
import Banner from './../components/Banner';

const Home = () => {
  const[topics,setTopics]= useState([]);


  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/quiz")
      .then((res) => res.json())
      .then((data) => {
        setTopics(data.data);
        console.log(data.data);
      });
  }, []);

  return (
    <div className=" flex justify-center items-center">
      <div className='w-4/5'>
      <Banner/>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-5'>
      {
        topics.map(topic=>
          <TopicCard key={topic.id} topic={topic}/>)
      }
      </div>
      </div>
    </div>
  );
};

export default Home;