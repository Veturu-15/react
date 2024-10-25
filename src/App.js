import React from 'react';
import './App.css';
import Login from './Pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import Mobile from './Pages/Mobile';
import Earbuds  from './Pages/Earbuds';
import Data from './Pages/Data';
import Profile from './Pages/Profile';
import  Logout  from './Pages/Logout';
import  Laptop  from './Pages/Laptop';
import Tv from './Pages/Tv';
import Refrigerator from './Pages/Refrigerator';


function App() {
  return (
    <div className='Main'>
      <Router>
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/signup' exact element={<Signup/>}/>
          <Route path='/Dashboard' exact element={<Dashboard/>}/>
          <Route path='/mobile' exact element={<Mobile/>}/>
          <Route path='/laptop' exact element={<Laptop/>}/>
          <Route path='/earbuds' exact element={<Earbuds/>}/>
          <Route path='/tv' exact element={<Tv/>}/>
          <Route path='/ref' exact element={<Refrigerator/>}/>
          <Route path='*' exact element={<Data/>}/>
          <Route path='/profile' exact element={<Profile/>}/>
          <Route path='/logout' exact element={<Logout/>}/>

          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
