import React, { useEffect, useState } from 'react';
import Axios from 'axios';
//import './MediumRepoPage.css';

const MediumRepoPage = () => {
    const [mediumrepositories, setMediumrepositories] = useState([]);

    useEffect(() => {
        const fetchRepositories = async () => {
          try {
            const response = await Axios.get('https://active-hub.onrender.com/mediumRepoData'); 
            console.log(response)
            
            if (!response) {
              throw new Error('Network response was not ok');
              return;
            }
            setMediumrepositories(response.data);
          } catch (error) {
            console.error('Error fetching repositories:', error);
          }
        };
    
        fetchRepositories();
      }, []);

      return (
        <div className="app">
      {mediumrepositories && mediumrepositories.map((repo) => (
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

export default MediumRepoPage
