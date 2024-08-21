import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import './EasyRepoPage.css';
import '../Components/Card.css'


const EasyRepoPage = () => {
    const [easyrepositories, setEasyrepositories] = useState([]);

    const fetchRepositories = async () => {
      try {
        const response = await Axios.get('https://active-hub.onrender.com/easyRepoData'); 

        if (!response) {
          console.error('Error fetching repositories:', response);
          return;
        }

        setEasyrepositories(response.data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    useEffect(() => {
        fetchRepositories();
      }, []);

      return (
        <div className="app">
      {easyrepositories && easyrepositories.map((repo) => (
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
}

export default EasyRepoPage
