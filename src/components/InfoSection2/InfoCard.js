import styled from 'styled-components';
import React from 'react'

export const InfoCardWrapper = styled.div`
  max-width: 2000px;
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
  max-height: 340px;
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
                    <InfoH2 style={{color: 'black'}}>Self-organising</InfoH2>
                    <InfoP style={{color: 'black'}}>

                      Self-organising
                    </InfoP>
                  </InfoCard>
                  <InfoCard>
                    <InfoH2 style={{color: 'black'}}>Communications & Messages</InfoH2>
                    <InfoP style={{color: 'black'}}>

                      The communications
                    </InfoP>
                  </InfoCard>
                  
            </InfoCardWrapper>
            <InfoCardWrapper style={{marginTop: '50px'}}>
                  
                  <InfoCard>
                    <InfoH2 style={{color: 'black'}}>Treaties</InfoH2>
                    <InfoP style={{color: 'black'}}>

                      Treaties
                    </InfoP>
                  </InfoCard>
                  <InfoCard>
                    <InfoH2 style={{color: 'black'}}>Health Decay</InfoH2>
                    <InfoP style={{color: 'black'}}>

                      Health Decay
                    </InfoP>
                  </InfoCard>
            </InfoCardWrapper>
        </div>
    )
}

export default InfoCards