import React/*, { useState, useEffect }*/ from 'react'
import '../style/Cards.css';
import Button from '@mui/material/Button';

function NewRunCards() {
    return (
        <div  className='cards'>
            <h3> Try it for Yourself!</h3>
            
            <p>Press the button below to try it for yourself. View past simulations and visualise your results.</p>
            
            <h1> <Button variant="contained"  color="success" size="large">Run it Yourself!</Button></h1>

            
        </div>
        
    );
}

export default NewRunCards;
