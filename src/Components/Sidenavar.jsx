import React from 'react'
import { Link } from 'react-router-dom';
function Sidenavar() {
  return (
    <div className='side'>
        <ul>
           <li>MAIN MENU</li> 
          <Link to='/Dashboard'><li>Dashboard</li></Link>  
          <Link to ='/searchjob'><li>Search Job</li></Link>  
            <li>Application</li>
            <li>Message</li>
            <li>Statics</li>
            <li>News</li>
        </ul>
    </div>
  )
}

export default Sidenavar