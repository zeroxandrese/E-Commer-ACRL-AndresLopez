import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { itemsCollection2 } from '../firebase';
import { cartContext } from '../context/CartContext';

function Pago() {
    const { carrito, totalPago, vaciarCarrito } = useContext(cartContext);

    const valorInicial = {
        correo: "",
        direccion: "",
        vPago: "",
        pedidoFinal: carrito,
        pagoFinal: totalPago,
        fechaSolicitud: new Date(),
    };

    const [values, setValues] = useState(valorInicial)

    const agregarCompra = async (e) => {
        await itemsCollection2.doc().set(e);
    };

    const mostrarId = () => itemsCollection2.orderBy("fechaSolicitud", "desc").limit(1).onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const id = doc.id
            alert("TU PEDIDO SE INGRESO DE MANERA CORRECTA EL CODIGO DE TU PEDIDO ES EL SIGUIENTE" + " " + id)
            vaciarCarrito();
        });
    });

    const handleOnSubmit = (e) => {
        e.preventDefault();
        agregarCompra(values);
        setValues(valorInicial);
        mostrarId();
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    };

    return (
        <div>
            <Form onSubmit={handleOnSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Ingresa tu correo</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" onChange={handleOnChange} name="correo" value={values.correo} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Dejanos tu dirección</Form.Label>
                    <Form.Control as="textarea" rows={3} onChange={handleOnChange} name="direccion" value={values.direccion} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Ingresa tu vouche de pago</Form.Label>
                    <Form.Control as="textarea" type="number" rows={1} onChange={handleOnChange} name="vPago" value={values.vPago} required />
                </Form.Group>
                <Button type="submit" variant="primary">FINALIZAR</Button>
            </Form>
        </div>
    )
}

export default Pago

