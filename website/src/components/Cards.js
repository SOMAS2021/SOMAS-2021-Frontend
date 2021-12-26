import React from 'react';
import CardItem from './CardItem';
import '../style/Cards.css';

function Cards() {
    return (
        <div  className='cards'>
            <h1> Check out this About Section below for SOMAS 2021</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
