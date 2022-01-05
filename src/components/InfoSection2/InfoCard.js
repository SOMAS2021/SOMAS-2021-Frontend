import styled from 'styled-components';
import React from 'react'

export const InfoCardWrapper = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  display: flex;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justifyContent: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const InfoCard = styled.div`
  background: 'black';
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 500px;
  padding: 30px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const InfoIcon = styled.img`
  height: 200px;
  width: 300px;
  margin-bottom: 10px;
`;


export const InfoH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  
`;

export const InfoP = styled.p`
  font-size: 1rem;
  text-align: center;
  
`;


function InfoCards() {
    return (
        <div>
            <InfoCardWrapper style={{marginTop: '50px'}}>
                  <InfoCard>
                    <InfoH2 style={{color: 'black'}}>Health Decay</InfoH2>
                    <InfoP style={{color: 'black'}}>

                    One of the key ingredients of the simulation structure is health modeling. Our agents represent human beings that 
                    are mortal, and they can therefore only survive a certain number of days without eating. Our approach to model the 
                    agents’ health is inspired by many video games: Health Points (HP). The HP value associated to each agent will change 
                    during the simulation, and this change is due to two mechanisms: the agents eating food, and the costs of living.
                    The food intake causes an HP increase which is modelled with diminishing returns: the more the agents eat, the less they 
                    gain proportionally. At the end of each day, the HP of each agent is also lowered by their costs of living. This can be 
                    compared to a certain amount of calories that the body needs.
                    </InfoP>
                  </InfoCard>
                </InfoCardWrapper>
                <InfoCardWrapper style={{marginTop: '50px'}}>
                  <InfoCard>
                    <InfoH2 style={{color: 'black'}}>Communications & Messages</InfoH2>
                    <InfoP style={{color: 'black'}}>

                    Agents within the System are able to communicate to other agents on either the floor above or below. Available 
                    to all of these Agents is a method of communication called Messages.  Within the simulation, a message passing common 
                    language has been defined and messages types have been divided into 4 categories. These are as follows: ‘AskMessage’:
                     message for inquiring the state of a neighbouring agent, ‘StateMessage’: message for announcing something about the state 
                     of an agent, ‘RequestMessage’: message for requesting something from a neighbouring agent and ‘ResponseMessage’: message 
                     for indicating an agreement or disagreement to a previous RequestMessage.  Something to note that different agent’s types 
                     can have customised responses each of these message types, including ignoring entirely or extracting information from sent
                      messages.
                    </InfoP>
                  </InfoCard>
                  
            </InfoCardWrapper>
            <InfoCardWrapper style={{marginTop: '50px'}}>
                  
                  <InfoCard>
                    <InfoH2 style={{color: 'black'}}>Treaties</InfoH2>
                    <InfoP style={{color: 'black'}}>

                    Given both the Agents’ self-interested natures and the economy of scarcity enforcing that all agents cannot be satiated on one given turn, 
                    we draw the conclusion that, without any self-organising mechanisms, it is impossible to reach a steady state in the Tower. Through 
                    implementing unconstrained strategies, Agents will inevitably act to maximise personal wealth without considering the threats to collectivism. 
                    To mitigate this, we offer Agents the ability to form treaties with one another to simulate localised governance. These treaties have a variety 
                    of fields that are passed as messages between floors, an example of which may be requesting that the neighbouring agent leaves a certain amount 
                    of food on the platform at the end of their turn.
                    </InfoP>
                  </InfoCard>
                  
            </InfoCardWrapper>
        </div>
    )
}

export default InfoCards
