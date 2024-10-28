import React from 'react';
import './App.css';
import Login from './Pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import Mobile from './Pages/Mobile';
import Earbuds from './Pages/Earbuds';
import Profile from './Pages/Profile';
import Logout from './Pages/Logout';
import Laptop from './Pages/Laptop';
import Tv from './Pages/Tv';
import Refrigerator from './Pages/Refrigerator';
import Data from './Pages/Data'; // Assuming you create this component

function App() {
  return (
    <div className='Main'>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/mobile' element={<Mobile />} />
          <Route path='/laptop' element={<Laptop />} />
          <Route path='/earbuds' element={<Earbuds />} />
          <Route path='/tv' element={<Tv />} />
          <Route path='/ref' element={<Refrigerator />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='*' element={<Data />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
