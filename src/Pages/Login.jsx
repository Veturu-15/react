import React from 'react';
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className='Login'>
        <h1>Login pages</h1> <br /> <br />
        <input type="text" placeholder='Enter Username:' /> <br /> <br />
        <input type="password"  placeholder='Enter passwords: ' /><br /> <br />
        <Link to={'Dashboard'}>  <button className='btn btn-primary'> Login</button></Link> <br /><br />
        <p>Don't have an Account?<Link to={'Signup'}>Signup</Link> </p>
    </div>
  )
}

export default Login