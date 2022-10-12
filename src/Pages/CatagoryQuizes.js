import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import loader from '../assets/loading.gif';

const CatagoryQuizes = () => {
  const {id} = useParams();
  const[catagoryQuizes,setCatagoryQuizes] = useState({});
  const[loading,setLoading] = useState(true);

  useEffect(()=>{
    const url = `https://openapi.programming-hero.com/api/quiz/${id}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      console.log(data.data);
      setCatagoryQuizes(data.data);
      setLoading(false);
    })
  },[id]);

  if(loading)
  {
    return <div className='min-h-screen flex justify-center items-center'>
      <img src={loader} alt="loading....." />
    </div>
  }

  return (
    <div className='text-5xl'>
      {
        catagoryQuizes.questions.map((quiz,index) =>
          <h1 key={index} className='text-sm'>{quiz.question}</h1>
          )
      }
    </div>
  );
};

export default CatagoryQuizes;