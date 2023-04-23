import React, {useState, useEffect } from 'react'
import './App.css'


function App() {

  const [githubName, setgithubName] = useState('');
  const [githubUrl, setgithubUrl] = useState('');

  useEffect(() => {
    fetch('http://api.github.com/users/learningToCode1234')
    .then(res => res.json())
    .then(data => {
      setgithubName(data.name);
      setgithubUrl(data.html_url);
    })
  }, []);

  return (
    <div className="App">
      <h1>Github Profile Info:</h1>
      <h2>{githubName}</h2>
      <a href={ githubUrl }>Link to Github Profile</a>
    </div>
  );
}

export default App;
