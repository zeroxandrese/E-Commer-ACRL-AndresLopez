import React, { useContext } from 'react'
import img from './cart.jpeg';
import './Cartwidget.css';
import { Link, Redirect } from 'react-router-dom';
import { cartContext } from '../context/CartContext';

function Cartwidget() {
    const { carrito, añadirCarrito } = useContext(cartContext);
    if (!carrito.length) return <Redirect to='/' />

    return (
        <div>
            <Link to="/Carrito">
                <img className='cart' src={img} alt='carrito de compras' width='65px' />
            </Link>
        </div>
    )
}

export default Cartwidget;
