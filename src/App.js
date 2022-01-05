import React, { Component } from 'react'
import './css/App.css';
import Navbar from './components/Navbar'

import Home from './contents/Home'
import About from './contents/About'

import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
              <Route exact path="JustinzDev" element={<Home />}></Route>
              <Route path="JustinzDev/about" element={<About />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
