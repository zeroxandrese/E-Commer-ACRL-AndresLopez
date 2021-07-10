import React, { useContext } from 'react';
import { cartContext } from '../context/CartContext';
import { Row, Col, Button } from 'react-bootstrap';

function Carrito() {
    const { carrito, vaciarCarrito } = useContext(cartContext);

    const mostrarElementos = listaElementos => {
        return carrito.map(x => {
            return (
                <div>
                    <Row>
                        <Col className='text-center mt-4 mb-4'>
                            <h1>{x.producto}</h1>
                            <h4>Descripcion: {x.descripcion}</h4>
                            <h4 style={{ color: "black" }}>Stock: {x.stock}</h4>
                            <h4 style={{ color: "black" }}>Cantidad a Comprar: {x.cantidad}</h4>
                        </Col>
                        <Col className='text-center mt-4 mb-4'>
                            <img src={x.img} alt="imagen producto" width='200px' />
                        </Col>
                    </Row>

                </div>
            )
        })
    }

    return (
        <div>
        <div>
            {mostrarElementos()}        
        </div>
        <div>
        <Button className="align-center" onClick={() => vaciarCarrito()} variant="primary">VACIAR CARRITO</Button>
        <Button onClick={() => alert("en construccion")} variant="primary">TERMINAR COMPRA</Button>
        </div>
        </div>
    )
}

export default Carrito
