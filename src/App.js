import React from 'react';
import './App.css';
import Login from './Pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import Mobile from './Pages/Mobile';
import Earbuds from './Pages/Earbuds';
import Profile from './Pages/Profile';
import Logout from './Pages/Logout';
import Laptop from './Pages/Laptop';
import Tv from './Pages/Tv';
import Refrigerator from './Pages/Refrigerator';
import Data from './Pages/Data'; 
import Mobiledetails from './Pages/Details/Mobiledetails';
import Laptopdetails from './Pages/Details/Laptopdetails';
import Eardetails from './Pages/Details/Eardetails';
import Tvdetails from './Pages/Details/Tvdetails';
import Refdetails from './Pages/Details/Refdetails';
import Add from './Pages/Add';
 

function App() {
  return (
    <div className='Main'> {/* Render the Header here */}
        <Router>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/mobile' element={<Mobile />} />
            <Route path='/mobile/:id' element={<Mobiledetails />} />
            <Route path='/laptop' element={<Laptop />} />
            <Route path='/laptop/:id' element={<Laptopdetails />} />
            <Route path='/earbuds' element={<Earbuds />} />
            <Route path='/earbuds/:id' element={<Eardetails />} />
            <Route path='/tv' element={<Tv />} />
            <Route path='/tv/:id' element={<Tvdetails />} />
            <Route path='/ref' element={<Refrigerator />} />
            <Route path='/ref/:id' element={<Refdetails />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/Add' element={<Add />} />
            <Route path='*' element={<Data />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
