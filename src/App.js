import React from 'react';
import './App.css';
import Login from './Pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import Sidenavar from './Components/Sidenavar';
import Searchjob from './Pages/Searchjob'

function App() {
  return (
    <div className='Main'>
      <Router>
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/signup' exact element={<Signup/>}/>
          <Route path='/Dashboard' exact element={<Dashboard/>}/>
          <Route path='/sidenav' exact element={<Sidenavar/>}/>
          <Route path='/searchjob' exact element={<Searchjob/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
