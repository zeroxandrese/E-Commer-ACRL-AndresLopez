import React, { useContext } from 'react';
import { cartContext } from '../context/CartContext';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Carrito() {
    const { carrito, vaciarCarrito, eliminarElementoCarrito, totalPago } = useContext(cartContext);

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
                            <Button className="align-center" onClick={() => eliminarElementoCarrito(x.ID)} variant="primary">Eliminar Producto</Button>
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
                <h4 style={{ color: "black" }}>Total a Pagar: ${totalPago}</h4>
                <Button className="align-center" onClick={() => vaciarCarrito()} variant="primary">VACIAR CARRITO</Button>
                <Link to="/Pago">
                <Button variant="primary">TERMINAR COMPRA</Button>
                </Link>
            </div>
        </div>
    )
}

export default Carrito
