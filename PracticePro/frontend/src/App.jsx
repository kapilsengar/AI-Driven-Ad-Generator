import React from 'react';
import Dashboard from './components/Dashboard';
import {Routes,Route} from 'react-router-dom';
import Card1 from './components/cards/Card1'
const App = () => {
  return (
    <>
      <h1 className="text-5xl font-bold text-blue-500 text-center">Newsletter Generator</h1>
      
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/card1' element={<Card1/>}/>
      </Routes>
    </>
  );
};

export default App;
