import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <div className="login">
      <div className="card">
        <h1>Login Page</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (username === 'Ammu' && password === 'Ammu123') {
              navigate('/dashboard');
            } else {
              alert("Invalid username or password");
            }
          }}
        >
          <input
            type="text"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br /><br />
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /><br />
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <br />
        <p>
          Don't have an Account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
