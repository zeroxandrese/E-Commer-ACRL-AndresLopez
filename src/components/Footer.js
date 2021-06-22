import React from 'react';
import imgi from './instagram.png';
import imgf from './facebook.png';
import './Footer.css';

function Footer() {
    return (
        <div>
            <img className='instagram' src={imgi} alt='instagram' width='50px'/>
            <img className='facebook' src={imgf} alt='facebook' width='50px'/>
            <p>Copyright AL &copy 2021</p>
        </div>
    )
}

export default Footer;
