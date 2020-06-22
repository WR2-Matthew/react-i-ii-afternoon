import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard'

function App() {

  return (
    <div className="App">
      <div className='header'>
        <h2 className='homeHeader' >Home</h2>
      </div>
      <Dashboard />
    </div>
  );
}

export default App;
