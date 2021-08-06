import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { itemsCollection3 } from '../firebase';
import Footer from './Footer';
import { toast } from 'react-toastify';

function Contactenos() {

    const valorInicial = {
        correo: "",
        comentario: "",
    };

    const [values, setValues] = useState(valorInicial)

    const agregarComentario = async (e) => {
        await itemsCollection3.doc().set(e);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        agregarComentario(values);
        toast('Consulta enviada',{
            type: 'info'
        })
        setValues(valorInicial);   
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
                    <Form.Control type="email" placeholder="name@example.com" onChange={handleOnChange} name="correo" value={values.correo} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Dejanos un comentario</Form.Label>
                    <Form.Control as="textarea" rows={3} onChange={handleOnChange} name="comentario" value={values.comentario} required/>
                </Form.Group>
                <Button type="submit" variant="primary">Enviar</Button>
            </Form>
            <div align="center">
                <Footer />
            </div>
        </div>
    )
}

export default Contactenos
