// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './layout/style/home.css';
import Header from './layout/components/Header';
import IntroVideo from './layout/components/IntroVideo';
import Home from './layout/pages/Home';
import Footer from './layout/components/Footer';
import SolarSystem from './layout/pages/SolarSystem';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<IntroVideo />} />
          <Route path="/home" element={<Home />} />
          <Route path="/solar" element={<SolarSystem />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
