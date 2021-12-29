import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NewRun from './components/pages/NewRun';
import Visualisations from './components/pages/Visualisations';

function App() {
  return (
    <>
      <Router>
        {/* navbar doesnt appear on all pages */}
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/NewRun" element={<NewRun />} />
          <Route path="/Visualisations" element={<Visualisations />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
