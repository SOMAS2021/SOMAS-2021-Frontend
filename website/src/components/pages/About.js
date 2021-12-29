import React from 'react'
import'../../App.css'
import AboutCards from '../AboutCards'
import Navbar from '../Navbar';
import Footer from './Footer';

function About() {
    return (
        <>
            <div>
            <Navbar/>
            <h1 className='about'>ABOUT SOMAS 2021</h1>;
            </div>
            <AboutCards />
            <Footer/>
        </>
    );
}

export default About

