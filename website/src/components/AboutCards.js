import React from 'react';
/*import CardItem from './CardItem';*/
import '../style/Cards.css';
import AgentTable from './AgentTable'


function AboutCards() {
    return (
        <div  className='cards'>
            <h1> More on Problem Defintion</h1>
            <h2>The Tower</h2>
            <p>The Tower is a vast monolith that is divided into floors. There is a top floor called the Kitchen,
            and then a series of Floors, numbered from Floor 1 onwards, and downwards. Is there a bottom level? 
            No one knows this either, or at least no one has ever reported there not being a level below them.
            </p>
            <p>
            On each floor, there are Residents. 
            Through the middle of The Tower runs an elevator. The elevator carries The Platform. Once a day,
            the Platform visits each Floor in turn, starting from Floor 1 and descending downwards.
            The Platform carries food: nutritious and delicious food, exotic foods from far off lands, mundane
            foods from nearby drive-throughs. The platform stops for a period of time at each floor, during
            which the Residents on that floor may eat as much as they like from the food available, but they may
            not save any.
            </p>
            <p>
            All they know is that on any one day there is not enough food to satiate (satisfy maximally) everyone,
            nor indeed enough food to satisfice (satisfy minimally) on any one day; however, there would be enough 
            food over a period of time to satisfice everyone. If a Resident does not get enough food over a certain 
            duration, she is eliminated, and immediately replaced by a new resident.
            </p>
            <p>
            Every N days, the Residents are randomly re-assigned to a new Floor. They do not know when the
            re-assignment will happen, nor to which Floor they will be assigned. To begin with, no agent has any
            knowledge of any other Resident: Residents can communicate by “shouting” up or down one
            adjacent level, but otherwise there is no communication between them.
            The objective of the Residents: to “win”, individually, by maximising their individual “utility”, and to
            “survive”, collectively, by minimising the number of replacements.
            </p>

            <h2>Agent Systems</h2>

            <p>
            They are 6 differnet agent teams, which all exhibit different behaviours. Hence, 6 different agent types.
            There is also the MVP agent type and the selfish agent type.
            ....
            </p>
            <div style={{ paddingLeft: 100 , paddingTop: 30, paddingRight: 100}}>
                <AgentTable />
            </div>
            <h2>How to play</h2>

            <p>
            Click New Run along the top navigation bar. Here, you can choose to run the game with the default flags, 
            or you can customize the game by changing the flags. Click to run the game. From here, you can either download 
            the outputs or click Visualise and explore different diagrams showing the progression of the game ran. The CI Output 
            (continuous integration output) tab gives the automated outputs of the run generated from our code. The Visualisation 
            tab will display the results of your own runs and it will persist your visualisations until you visualise a new game.
            </p>
        </div>
    );
}

export default AboutCards;
