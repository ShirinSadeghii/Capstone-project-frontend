import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import FlightsPage from './pages/FlightsPage/FlightsPage';
import HotelsPage from './pages/HotelsPage/HotelsPage';
import PlannerPage from './pages/PlannerPage/PlannerPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import FlightConfirmPage from './pages/FlightConfirmPage/FlightConfirmPage';
import HotelConfirmPage from './pages/HotelConfirmPage/HotelConfirmPage';


function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:city" element={<HomePage />} />
          <Route path='/flightsearch' element={<FlightsPage />} />
          <Route path='/flightsearch/:city' element={<FlightsPage />} />
          <Route path='/confirmflight' element={<FlightConfirmPage />} />
          <Route path='/hotelsearch/' element={<HotelsPage />} />
          <Route path='/hotelsearch/:city' element={<HotelsPage />} />
          <Route path='/confirmhotel' element={<HotelConfirmPage />} />
          <Route path='/planner' element={<PlannerPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
 
    </div>
  )
}
export default App;
