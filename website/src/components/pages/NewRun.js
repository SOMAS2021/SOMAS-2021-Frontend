import React from 'react'
import'../../App.css'
import NewRunCards from '../NewRunCards'
//import { runButton } from '../Button';


function NewRun() {
    return (
        <div>
            <h1 className='NewRun'>New Run</h1>
            
            <NewRunCards />
        </div>
    );
}

export default NewRun



