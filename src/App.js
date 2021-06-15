import React from 'react'
import Main from './components/Main'
import './App.css'

function App() {
  return (
    <>
      <h1 style={{textAlign:'center'}}>Pokedex</h1>
      <div className="poke-container">
        <Main />
      </div>
    </>
  );
}

export default App;
