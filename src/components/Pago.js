import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useId } from "react-id-generator";

function Pago() {
    const [pagoID] = useId();
    const pagoFinal = ()=>{
        alert(`tu pedido ha sido ingresado con exito tu ID es ${pagoID}`)
    }

    
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Ingresa tu correo</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Dejanos tu dirección</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Ingresa tu vouche de pago</Form.Label>
                    <Form.Control as="textarea" rows={1} />
                </Form.Group>
            </Form>
            <Button onClick={() => pagoFinal()} variant="primary">FINALIZAR</Button>
        </div>
    )
}

export default Pago

