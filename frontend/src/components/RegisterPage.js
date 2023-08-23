import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../App.css';

const RegistrationPage = () => {
  const [registrationData, setRegistrationData] = useState({
    username: '',
    password: ''
  })


  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;

    setRegistrationData((prevData) => ({
      ...prevData,
      [name]: value,
    }))

  }

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/register', registrationData);
      console.log(response.data);
      alert("Registration Done!");
    }
    catch (error) {
      console.log(error)
    }
    setRegistrationData({
      username: '',
      password: '',
    })
  }

  return (
    <div className='login-container'>
      <h1>Registration Form</h1>
      <form
      className='login-form'
       onSubmit={handleRegistrationSubmit}>
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={registrationData.username}
          onChange={handleRegistrationChange}
          required
        />

        <input
          type='password'
          name='password'
          placeholder='Password'
          value={registrationData.password}
          onChange={handleRegistrationChange}
          required
        />
        <button type='submit'>Register</button>
        <p>
          Already registered? <Link to="/login">Login Here</Link>
        </p>
      </form>
    </div>
  )
}

export default RegistrationPage;