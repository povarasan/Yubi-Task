import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route,useParams,useLocation } from 'react-router-dom';
import Login from './pages/login';
import Otp from './pages/otp';
import Basic from './pages/basic';
import Welcome from './pages/welcome';
import Interest from './pages/interest';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/otp' element={<Otp />} />
          <Route path='/basic' element={<Basic />} />
          <Route path='/interest' element={<Interest />} />
          <Route path='/welcome' element={<Welcome/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
