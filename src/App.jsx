import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import FlightsPage from './pages/FlightsPage/FlightsPage';
import HotelsPage from './pages/HotelsPage/HotelsPage';


function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:city" element={<HomePage />} />
          <Route path='/flightsearch' element={<FlightsPage />} />
          <Route path='/flightsearch/:city' element={<FlightsPage />} />
          <Route path='/hotelsearch/' element={<HotelsPage />} />
          <Route path='/hotelsearch/:city' element={<HotelsPage />} />
        </Routes>
      </BrowserRouter>
 
    </div>
  )
}
export default App;
