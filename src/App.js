import React from 'react';
import './App.css';
import Login from './Pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import Sidenavar from './Components/Sidenavar';
import Searchjob from './Pages/Searchjob';
import Application from './Pages/Application';
import Messages from './Pages/Messages';
import Statics from './Pages/Statics';
import News from './Pages/News';
import Data from './Pages/Data';
import Profile from './Pages/Profile';
import  Logout  from './Pages/Logout';

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
          <Route path='/application' exact element={<Application/>}/>
          <Route path='/messages' exact element={<Messages/>}/>
          <Route path='/statics' exact element={<Statics/>}/>
          <Route path='/news' exact element={<News/>}/>
          <Route path='*' exact element={<Data/>}/>
          <Route path='/profile' exact element={<Profile/>}/>
          <Route path='/logout' exact element={<Logout/>}/>

          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
