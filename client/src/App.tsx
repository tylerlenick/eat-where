import { Navbar } from './components/Navbar';
import { Body } from './components/Body';
//import { useState, useEffect } from 'react';

function App() {
  console.log(process.env);
  
  return (
    <div className="App">
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
