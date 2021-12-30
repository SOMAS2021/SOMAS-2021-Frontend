import React from 'react';
import CardItem from './CardItem';
import '../style/Cards.css';
import img1 from '../images/platform7.JPG';
import img2 from '../images/platform4.jpg';
import img3 from '../images/platform6.jpg';
import img4 from '../images/img-1.jpg';
import img5 from '../images/img-2.jpg';
import img6 from '../images/img-3.jpg';

function Cards() {
    return (
        
        <div  className='cards'>
            <h1> Problem Definition for the Platform-Playing Problem </h1>
            <h2> Aims </h2>
            <p>The aim of the SOMAS Assessed Coursework is to specify, design and implement a self-organising 
                multi-agent system that can solve a large(ish)-scale, long(ish)-term, inter-dependent collective action 
                problem, using a range of techniques that have been presented in the lectures.</p>
            <h3>Breakdown of Problem</h3>
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
                            text='Agent Systems'
                            label='Problems'
                            path ='/About'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src= {img3}
                            text='Rules of the System'
                            label='Problems'
                            path ='/About'
                        />
                    </ul>
                </div>
            </div>
            <h3>Obstacles along the Project</h3>
            <div className="cards__container">
                <div className="cards__wrapper"></div>
                    <ul className="cards__items">
                                <CardItem 
                                    src= {img4}
                                    text='Comms & Messages'
                                    label='Problems'
                                    path ='/About'
                                />
                                <CardItem 
                                    src= {img5}
                                    text='Self-Organisation'
                                    label='Problems'
                                    path ='/About'
                                />
                                <CardItem 
                                    src= {img6}
                                    text='Health Decay'
                                    label='Problems'
                                    path ='/About'
                                />
                            </ul>
                </div>
            </div>
        
    );
}

export default Cards;
