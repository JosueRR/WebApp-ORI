import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 


import './index.css';
import Home from './pages'; 
import About from './pages/about';
import Events from './pages/events'; 
import Navbar from "./components/Navbar";


function App() {
  return (
    <Router> 
      <Navbar /> 
      <Routes> 
      <Route path='/' exact element ={<Home/>}></Route>
      <Route path='/about' element ={<About/>}></Route>
      <Route path='/events' element ={<Events/>}></Route>
      </Routes> 
    </Router> 
  );
}

export default App;
