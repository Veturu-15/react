import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaSearch, FaFileAlt, FaEnvelope, FaChartBar, FaNewspaper } from 'react-icons/fa';

function Sidenavar() {
  return (
    <div className='side '>
      <ul>
        <li>MAIN MENU</li>
        <li>
          <NavLink to='/Dashboard' className='nav'>
            <FaTachometerAlt /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to='/searchjob' className='nav'>
            <FaSearch /> Search Job
          </NavLink>
        </li>
        <li>
          <NavLink to='/application' className='nav'>
            <FaFileAlt /> Application
          </NavLink>
        </li>
        <li>
          <NavLink to='/messages'className='nav'>
            <FaEnvelope /> Messages
          </NavLink>
        </li>
        <li>
          <NavLink to='/statics' className='nav'>
            <FaChartBar /> Stastics
          </NavLink>
        </li>
        <li>
          <NavLink to='/news' className='nav'>
            <FaNewspaper /> News
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidenavar;
