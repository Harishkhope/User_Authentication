import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Home from './components/Home';

const App = () => {
  return (
    <div>
    <Router>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/login" element={<LoginPage/>}/>
    <Route exact path="/register" element={<RegisterPage/>}/>
    </Routes>
    </Router>
    </div>
  )
}

export default App