import React from 'react';
import '../../App.css';
import Hero from '../Hero';
import Footer from './Footer';
import '../../style/Home.css';
import Navbar from '../Navbar';
import Cards from '../Cards';
import About from './About';
import NewRun from './NewRun';


function Home() {
  return (
    <div className='home-container'>
      <Navbar/>
      <Hero />
      <Cards />
      <About />
      <NewRun />
      <Footer />
    </div>
  );
}

export default Home;
