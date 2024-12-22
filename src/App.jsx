import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Categories from './components/Categories';
import About from './components/About';



function App() {

  

  return (
    
    <>
      <Router>
  <Routes>
    <Route path='/register' element={<Register/>}/>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Home />} />
    <Route path="/quiz/category/:category" element={<Quiz />} />
    <Route path="/about" element={<About />} />
    <Route path="/categories" element={<Categories />} />
    
  </Routes>
</Router>
    </>
  )
}

export default App;
