import React, { useState, useEffect, useCallback } from 'react';
import { Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';
import './Items.css';

function Items(props,{items}) {
    const [producto, setProducto] = useState([]);


    useEffect(() => {
        productos();
    }, []);

    const productos = async () => {
        const data = await fetch('https://run.mocky.io/v3/6b696f7e-4939-405e-ae49-e6439fba2be4');
        const item = await data.json();
        setProducto(item);
    };

    const construirCards = listaElementos => {
        return listaElementos.map(x => {
            return (
                <Card key={x.ID} className='cardsh' style={{ width: '18rem' }}>
                    <Link to={`/item/${x.ID}`}>
                        <Card.Img variant="top" src={x.img} />
                    </Link>
                    <Card.Body>
                        <Card.Title >{x.producto}</Card.Title>
                        <Card.Text className="contenidoCard">
                            <h6>STOCK DISPONIBLE</h6> 
                            <p className="contador">{x.stock}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            )
        })
    }

    return (
        <div className='cards'>

            {construirCards(producto)}

        </div>
    )
}

export default Items
