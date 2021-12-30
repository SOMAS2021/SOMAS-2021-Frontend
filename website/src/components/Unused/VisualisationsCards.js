import React from 'react';
import CardItem from '../CardItem';
import '../style/Cards.css';
import img1 from '../images/img-1.jpg';
import img2 from '../images/img-2.jpg';
import img3 from '../images/img-3.jpg';

function VisualisationsCards() {
    return (
        <div  className='cards'>
            <h1> Graphs and Models</h1>
            <p>In the below section please enter in your parematers for the run time.</p>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src= {img1}
                            text='Graph 1'
                            label='Problems'
                            path ='/About'
                        />
                        <CardItem 
                            src= {img2}
                            text='Graph 2'
                            label='Problems'
                            path ='/About'
                        />
                        <CardItem 
                            src= {img3}
                            text='Graph 3'
                            label='Problems'
                            path ='/About'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default VisualisationsCards;
