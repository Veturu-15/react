import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaSearch, FaFileAlt, FaEnvelope, FaChartBar, FaNewspaper, FaUser } from 'react-icons/fa'; // Import FaUser for Profile

function Sidenavar() {
  return (
    <div className='side'>
      <ul>
        <li>MAIN MENU</li>
        <li>
          <NavLink to='/Dashboard' className='nav' activeClassName='active'>
            <FaTachometerAlt /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to='/searchjob' className='nav' activeClassName='active'>
            <FaSearch /> Search Job
          </NavLink>
        </li>
        <li>
          <NavLink to='/application' className='nav' activeClassName='active'>
            <FaFileAlt /> Application
          </NavLink>
        </li>
        <li>
          <NavLink to='/messages' className='nav' activeClassName='active'>
            <FaEnvelope /> Messages
          </NavLink>
        </li>
        <li>
          <NavLink to='/statics' className='nav' activeClassName='active'>
            <FaChartBar /> Statistics
          </NavLink>
        </li>
        <li>
          <NavLink to='/news' className='nav' activeClassName='active'>
            <FaNewspaper /> News
          </NavLink>
        </li>
        <li>
          <NavLink to='/profile' className='nav' activeClassName='active'>
            <FaUser /> Profile 
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidenavar;
