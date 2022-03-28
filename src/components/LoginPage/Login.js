import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className='loginpage'>
        <div className='loginContent'>
            <h1>Login</h1>
    <form name='loginForm' >
        <input type='text' name='UserName' placeholder='Enter Name' />
        <br/><br />
        <button type='submit'>Login</button>
    </form> 
        </div>
    </div>
  )
}

export default Login