//import logo from '../logo';
import './App.css';
import Day1a from '../Layout/Day1/Day1a';
import React from 'react';
import Day1b from '../Layout/Day1/Day1b';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
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
        <Day1a/>
        <Day1b/>
        
      </header>
    </div>
    
  );
}

export default App;
