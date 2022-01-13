import React from 'react';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,

} from '../InfoSection2/InfoElements';
import InfoTabs from '../InfoSection2/InfoTabs';
import InfoCards from '../InfoSection2/InfoCard';

const InfoSection2 = ({
  lightBg,
  topLine,
  topLine2,
  topLine3,
  lightText,
  headline,
  headline2,
  headline3,
  description,
  description2,
  description3,
  description4,
  description5,
  buttonLabel,
  id,
  primary,
  darkText,
  dark,
  dark2
}) => {
  console.log(primary);
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow >
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <Subtitle darkText={darkText}>{description2}</Subtitle>
                <Subtitle darkText={darkText}>{description3}</Subtitle>
                <Subtitle darkText={darkText}>{description4}</Subtitle>
        
                <TopLine style={{marginTop: '40px'}}>{topLine2}</TopLine>
                <Heading lightText={lightText}>{headline2}</Heading>
                
                <InfoTabs />
                <Subtitle style={{marginTop: '30px'}} darkText={darkText}>{description5}</Subtitle>
                <TopLine style={{marginTop: '40px'}}>{topLine3}</TopLine>
                <Heading lightText={lightText}>{headline3}</Heading>
                

                <InfoCards />
              </TextWrapper>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection2;
