import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
  return (
    <>
      <Router>
        {/* navbar doesnt appear on all pages */}
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<Home />} />
          <Route path="/NewRun" element={<Home />} />
          <Route path="/Visualisations" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
