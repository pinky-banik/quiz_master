import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import loader from '../assets/loading.gif';
import QuizCard from '../components/QuizCard';

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
    <div className='text-4xl w-3/4 mx-auto pt-20'>
      <h1 className='text-center font-bold text-primary'>Quiz of {catagoryQuizes.name}</h1>

      
      <div>
        {
          catagoryQuizes.questions.map((quiz,index)=>
            <QuizCard  key={quiz.id} quiz={quiz} index={index+1}/>
            )
        }
      </div>
    </div>
  );
};

export default CatagoryQuizes;