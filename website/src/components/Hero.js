import React, {useState} from 'react';
import '../App.css';
import '../style/Hero.css';
import { Button } from '../components/Button';
import Modal from './Modal';
import Video from '../videos/platform2.mov';

function Hero() {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);
  return (
      <div className="hero-container">
        {/* <video src={Video} autoPlay loop muted /> */}
        {/* <image src={Image}/> */}
        <h1>SELF ORGANISING MULTI AGENT SYSTEMS 2021</h1>
        <p>The Platform-Playing Platform</p>
        <Button
          className='clickme'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={() => Toggle()}
        >
          WATCH ANIMATION <i className='far fa-play-circle' />
        </Button>
        <Modal show={modal} title="Platform Animation" close={Toggle}/>
      </div>
  );
}

export default Hero;
