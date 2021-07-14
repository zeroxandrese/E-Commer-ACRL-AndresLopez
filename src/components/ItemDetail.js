import React, { useContext, useState, useCallback, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { cartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

function ItemDetail({ ...elemento }) {
    const context = useContext(cartContext);
    const { carrito, añadirCarrito } = useContext(cartContext);
    const onAdd = cantidad => añadirCarrito(elemento, cantidad);
    
    return (
        <div>
            <Row>
                <Col className='text-center mt-4 mb-4'>
                    <h1>{elemento.producto}</h1>
                    <img src={elemento.img} alt="imagen producto" width='450px' />
                </Col>
                <Col className='text-center mt-4 mb-4'>
                    <h4>Descripcion: {elemento.descripcion}</h4>
                    <h4 style={{ color: "black" }}>Stock: {elemento.stock}</h4>
                    <h4 style={{ color: "black" }}>Categoria: {elemento.category}</h4>
                    <h4 style={{ color: "black" }}>Precio: {elemento.precio}$</h4>
                    <ItemCount {...elemento} onAdd={onAdd} />
                </Col>
            </Row>
        </div>
    )
}

export default ItemDetail
