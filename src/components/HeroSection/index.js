import React, { useState } from 'react';
import { Button } from '../ButtonElements';

import Video from '../../videos/platform.mov';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroElements';

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mov' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Self Organising Multi-Agent Systems</HeroH1>
        <HeroP>
          THE PLATFORM PLAYING PLATFORM
        </HeroP>
        <HeroBtnWrapper>
          <Button
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            primary='true'
            dark='true'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            target='_blank'
            aria-label='Platform Dashboard'
            href='https://somas-2021-568r2.ondigitalocean.app/'
          >
            New Run {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
