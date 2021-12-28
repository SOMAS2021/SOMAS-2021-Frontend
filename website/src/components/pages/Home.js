import React from 'react';
import '../../App.css';
import Hero from '../Hero';
import Footer from './Footer';
import '../../style/Home.css';
import Navbar from '../Navbar';

function Home() {
  return (
    <div className='home-container'>
      <Navbar/>
      <Hero />
      <Footer />
    </div>
  );
}

export default Home;
