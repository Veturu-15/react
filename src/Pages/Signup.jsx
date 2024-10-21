import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='Signup'>
    <h1>Signup</h1> <br /><br />
    <input type="text" placeholder='Name:'/> <br /> <br />
    <input type="email" placeholder='email:' /><br /> <br />
    <input type="password" placeholder='Password:'/> <br /> <br />
     <Link to={'/'}>  <button className='btn btn-primary'>Signup</button></Link> <br /><br />
    <input type="checkbox" id='check' />
    <label id='check'>Remember me</label>
    </div>
  )
}

export default Signup