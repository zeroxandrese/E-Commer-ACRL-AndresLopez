import React from 'react';
import { Row, Col } from 'react-bootstrap';

function ItemDetail({ID, descripcion, producto, stock, img, category}) {
    return (
        <div>
            <Row>
            <Col className='text-center mt-4 mb-4'>
            <h1>{producto}</h1>
            <img src={img} alt="imagen producto" width='450px' />
            </Col>
             <Col className='text-center mt-4 mb-4'>   
            <h4>Descripcion: {descripcion}</h4>
            <h4 style={{color:"black"}}>Stock: {stock}</h4>
            <h4 style={{color:"black"}}>Categoria: {category}</h4>
            </Col>
            </Row>
        </div>
    )
}

export default ItemDetail
