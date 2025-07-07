import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.png';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt='Profile' />
      <h1>
        <span>I'm Tamim Tajwar Alif,</span> frontend developer based in BD.
      </h1>
      <p>
        I am a Frontend Developer from Natore, Bangladesh, with 2 years of
        experience. Over the past two years, I have built 20+ large websites.
      </p>
      <div className='hero-action'>
        <Link
          to='contact'
          smooth={true}
          duration={500}
          offset={-60}
          className='hero-connect'
        >
          Connect with me
        </Link>
        <div className='hero-resume'>My resume</div>
      </div>
    </div>
  );
};

export default Hero;
