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
          <Route path="/:city" element={<HomePage />} />
          <Route path='/flightsearch' element={<FlightsPage />} />
          <Route path='/flightsearch/:city' element={<FlightsPage />} />
        </Routes>
      </BrowserRouter>
 
    </div>
  )
}
export default App;
