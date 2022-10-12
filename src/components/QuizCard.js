import React from "react";
import { BsFillEyeFill } from "react-icons/bs";

const QuizCard = ({ quiz, index }) => {
  const { id, options, question, correctAnswer } = quiz;
  console.log(options);
  return (
    <div className="card p-5 shadow-lg m-5 ">
      <div className="p-5 flex justify-between">
        <h1 className="text-xl font-bold text-primary">
          {index}. {question.slice(3, -4)}
        </h1>

        {/* correct answer modal */}
        <div>
          <label htmlFor="my-modal-3" >
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
                <div key={index} className="border-primary p-3 rounded border-2 text-sm">
                  <h1>{index+1}. {option}</h1>
                </div>
                )
          }
          </div>
    </div>
  );
};

export default QuizCard;
