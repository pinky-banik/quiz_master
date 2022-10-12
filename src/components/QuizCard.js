import React from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { toast } from "react-toastify";

const QuizCard = ({ quiz, index}) => {
  const { id, options, question, correctAnswer } = quiz;
  console.log(options);





  const checkAnswer = option =>{
    if(option === correctAnswer)
    {
      toast.success("Correct Answer!!");
      
    }else{
      toast.error("Wrong Answer!!");
    }
  }

  return (
    <div className="card p-5 shadow-lg m-5 ">
      <div className="p-5 flex justify-between">
        <h1 className="text-xl font-bold text-primary">
          {index}. {question.slice(3, -4)}
        </h1>

        {/* correct answer modal */}
        <div>
          <label htmlFor="my-modal-3" className="cursor-pointer" >
          <BsFillEyeFill  className='text-primary ml-5'/>
          </label>

          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle absolute right-2 top-2 bg-primary "
              >
                ✕
              </label>
              <h3 className="text-lg text-primary font-bold">
                Correct Answer : 
              </h3>
              <p className="py-4  text-lg">
                {correctAnswer}
              </p>
            </div>
            
          </div>
        </div>
        {/* ----------eye modal closed----------- */}

        
      </div>
      {/* Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 text-lg p-5 gap-5 ">
          {
              options.map((option,index)=>
                <div key={index} className="border-primary rounded border-2 text-sm  cursor-pointer ">
                  <button onClick={()=>checkAnswer(option)} type="radio" className="p-5 hover:bg-blue-100  focus:bg-blue-400 w-full h-full">{index+1}. {option}</button>
                </div>
                )
          }
          </div>
    </div>
  );
};

export default QuizCard;
