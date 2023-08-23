import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';



const LoginPage = () => {


  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  })


  //submit function
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://userauthentication-ciwu.onrender.com', loginData);
      const { success, message } = response.data;

      if (success) {
        console.log('Login Successfully')
      }
      else {
        console.log(message);
      }
      alert("Logged in successfully");
    }
    catch (error) {
      console.error('Login error', error)
    }
    setLoginData({
      username: '',
      password: ''
    })
  }

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }


  return (
    <div className='login-container'>
      <h1>Login Page</h1>
      <form
      className='login-form' 
      onSubmit={handleLoginSubmit}>
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={loginData.username}
          onChange={handleLoginChange}
          required
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={loginData.password}
          onChange={handleLoginChange}
          required
        />
        <button type='submit'>Login</button>
        <p>
          Not registered yet? <Link to='/register'>Register Here</Link>
        </p>
      </form>
    </div>
  )
}

export default LoginPage
