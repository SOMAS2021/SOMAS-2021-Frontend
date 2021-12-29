import React from 'react'
import'../../App.css'
import NewRunCards from '../NewRunCards'
import Navbar from '../Navbar';

function NewRun() {
    return (
        <div>
            <Navbar/>
            <h1 className='NewRun'>New Run</h1>            
            <NewRunCards />
        </div>
    );
}

export default NewRun



