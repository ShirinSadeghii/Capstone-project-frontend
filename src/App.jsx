import './App.scss';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import FlightsPage from './pages/FlightsPage/FlightsPage';


function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<HomePage />} />
          <Route path='/flightsearch' element={<FlightsPage />} />
          <Route path='/flightsearch/:id' element={<FlightsPage />} />
        </Routes>
      </BrowserRouter>
 
    </div>
  )
}
export default App;
