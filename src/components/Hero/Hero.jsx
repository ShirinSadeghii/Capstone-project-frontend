import '../Hero/Hero.scss';
import dataJson from '../../data/data.json';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


function Hero() {
const baseUrl = process.env.REACT_APP_BASE_URL;   
const navigate = useNavigate();
const params = useParams();


return (
    <main className="hero">
        <div className='hero__overlay'>
        <h1 className='hero__title'>Adventure awaits</h1>
        <p className='hero__subtitle'>Book your next vacation today</p>  
        </div>
  
    </main>
)
}

export default Hero