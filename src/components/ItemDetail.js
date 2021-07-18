import React, { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import { cartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

function ItemDetail({ producto }) {
    const {  añadirCarrito } = useContext(cartContext);
    const onAdd = cantidad => añadirCarrito(producto, cantidad);
    
    return (
        <div>
            <Row>
                <Col className='text-center mt-4 mb-4'>
                    <h1>{producto.producto}</h1>
                    <img src={producto.img} alt="imagen producto" width='450px' />
                </Col>
                <Col className='text-center mt-4 mb-4'>
                    <h4>Descripcion: {producto.descripcion}</h4>
                    <h4 style={{ color: "black" }}>Stock: {producto.stock}</h4>
                    <h4 style={{ color: "black" }}>Categoria: {producto.category}</h4>
                    <h4 style={{ color: "black" }}>Precio: {producto.precio}$</h4>
                    <ItemCount producto={ producto } onAdd={onAdd} />
                    </Col>
            </Row> 
        </div>
    )
}

export default ItemDetail
