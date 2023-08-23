import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
const Home = () => {
  return (
    <div>
    <Link to="/login" className='Login'><h1>LOGIN</h1></Link>
    <Link to="/register" className='Login'><h1>REGISTER </h1></Link>
    </div>
  )
}

export default Home