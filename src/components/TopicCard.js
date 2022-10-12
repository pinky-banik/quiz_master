import React from "react";
import {FaArrowAltCircleRight} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const TopicCard = ({topic}) => {
  
  const {id,logo,name,total} = topic;
  const navigate=useNavigate();
  return (
    <div className="p-5">
      <div className="card card-compact z-0 bg-base-100 shadow-xl">
        <figure>
          <img src={logo} alt="logo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-primary">{name}</h2>
          <h3 className="text-lg font-bold">Total : {total}</h3>
          <div className=" justify-center w-full">
            <button onClick={()=>navigate(`/catagory-quizes/${id}`)} className="btn btn-primary text-white font-bold w-full my-2 normal-case text-lg flex justify-center items-center">Start Practise <FaArrowAltCircleRight className="text-2xl font-bold mx-2"/> </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
