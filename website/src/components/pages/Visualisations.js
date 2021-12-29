import React from 'react'
import'../../App.css'
import Navbar from '../Navbar'
import VisualisationsCards from '../VisualisationsCards'

function Visualisations() {
    return (
        <div>
            <Navbar/>
            <h1 className='Visualisations'>VISUALISATIONS</h1>;
            <VisualisationsCards />
        </div>
    )
}

export default Visualisations