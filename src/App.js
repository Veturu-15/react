import React from 'react';
import './App.css';
import Login from './Pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div className='Main'>
      <Router>
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/signup' exact element={<Signup/>}/>
          <Route path='/Dashboard' exact element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
