import React from 'react';
import Icon3 from '../../images/platform.jpg';
import Icon2 from '../../images/platform4.jpg';
import Icon1 from '../../images/platform7.JPG';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  //ServicesH3,
  ServicesP
} from './ServicesElements';


const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Problem Breakdown</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>The Tower</ServicesH2>
          <ServicesP>
            Rules and Design of the Tower itself, which the Agents find themselves in.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Agent Types</ServicesH2>
          <ServicesP>
            All the different types of implemented Agents avaliable to enter the tower.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>The System</ServicesH2>
          <ServicesP>
            Different functions within system, including Communication, Health Decay, Treaties and more.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
      


    </ServicesContainer>


  );
};

export default Services;
