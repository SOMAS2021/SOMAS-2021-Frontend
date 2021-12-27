import React from 'react';
import CardItem from './CardItem';
import '../style/Cards.css';
import img1 from '../images/platform5.jpg';
import img2 from '../images/platform6.jpg';
import img3 from '../images/platform3.jpg';
import img4 from '../images/img-4.jpg';
import img5 from '../images/img-5.jpg';

function Cards() {
    return (
        <div  className='cards'>
            <h1> Problem Definition for SOMAS 2021</h1>
            <p>The aim of the SOMAS Assessed Coursework is to specify, design and implement a self-organising 
                multi-agent system that can solve a large(ish)-scale, long(ish)-term, inter-dependent collective action 
                problem, using a range of techniques that have been presented in the lectures.</p>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src= {img1}
                            text='The Tower'
                            label='Problems'
                            path ='/About'
                        />
                        <CardItem 
                            src= {img2}
                            text='Types of Agents Systems'
                            label='Problems'
                            path ='/About'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src= {img3}
                            text='Rules of the Tower'
                            label='Problems'
                            path ='/About'
                        />
                        <CardItem 
                            src= {img4}
                            text='Rules of Agents'
                            label='Problems'
                            path ='/About'
                        />
                        <CardItem 
                            src= {img5}
                            text='Simulation'
                            label='Problems'
                            path ='/About'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
