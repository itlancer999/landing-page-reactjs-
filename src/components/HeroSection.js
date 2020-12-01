import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';



function HeroSection() {
	return (
		<div className='hero-container'>
			{/*<video src="./video/video-2.mp4" autoPlay loop muted />*/}
		<h1>What are you waiting for?</h1>
		<div className='hero-btns'>
		<Button className='btns' buttonStyle='btn--outline' btnSize='btn--large'>GET STARTED</Button>
		<Button className='btns' buttonStyle='btn--primary' btnSize='btn--large'>Watch Trailer <i className='far fa-play-circle' /></Button>
		</div>
		</div>
	)
}



export default HeroSection;
