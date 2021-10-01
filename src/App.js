import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const data = {
	username: "JOSIA RINDRA",
	email : "rindra@example.com",
	password: "123456789",
	present_measure: 23,
	proposed_measure: "male",
	age: 23,
	sex: "male"
  }
  useEffect(() => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    fetch('http://127.0.0.1:3000/signup', requestOptions)
        .then(response => response.json())
        .then(data => console.log('hello'));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
