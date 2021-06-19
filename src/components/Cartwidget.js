import React from 'react'
import img from './cart.jpeg';
import './Cartwidget.css';

function Cartwidget() {
    return (
        <div>
            <img className='cart' src={img} alt='carrito de compras' width='65px'/>
        </div>
    )
}

export default Cartwidget;
