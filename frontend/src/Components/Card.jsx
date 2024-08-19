import React, { useEffect, useState } from 'react';
import  Axios  from 'axios';
// import './Card.css';


const Card = () => {
  const [data,setData]=useState([]);

  const getData=async()=>{
    const response=await Axios.get("https://active-hub.onrender.com/getData")
    setData(response.data)  
  }

  useEffect(()=>{
    getData()
  },[]);

  console.log(data);
  return (
    <div className="app">
      {data.map((repo) => (
        <div className="card" key={repo._id}>
          <h2>{repo.name}</h2>
          <p><strong>Owner:</strong> {repo.owner}</p>
          <p><strong>URL:</strong> <a href={repo.URL} target="_blank" rel="noopener noreferrer">{repo.URL}</a></p>
          <p><strong>Description:</strong> {repo.description}</p>
          <p><strong>Tech Stack:</strong> {repo.techStack.join(', ')}</p>
          <p><strong>Difficulty:</strong> {repo.difficulty}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
