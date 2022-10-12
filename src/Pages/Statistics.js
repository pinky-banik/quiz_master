import React, { useEffect, useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const Statistics = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/quiz")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        console.log(data.data);
      });
  }, []);

  
  return (
    <div>
      <h1 className="text-center pt-20 text-primary font-bold text-4xl">Statistics</h1>
      <div className="flex justify-center py-20">
      <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="total" stroke="#2491eb" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
    </div> 
    </div>    
  );
};

export default Statistics;
