import React, { useState, useEffect, useCallback } from 'react';
import { Card, Button } from 'react-bootstrap';
import './Items.css';

function Items(props) {
    const [producto, setProducto] = useState([]);
    const [cantidadSolicitada, setCantidadSolicitada] = useState({});


    useEffect(() => {
        productos();
    }, []);

    const productos = async () => {
        const data = await fetch('https://run.mocky.io/v3/cac08696-606b-4a2d-a8b4-db9dc21459c7');
        const item = await data.json();
        setProducto(item);
        const cantidadesIniciales = {};
        item.forEach(element => {
            cantidadesIniciales[element.ID] = 0;
        });
        setCantidadSolicitada(cantidadesIniciales)
    };


    const Incremento = useCallback(
        (x) => {
            setCantidadSolicitada(valorPrevio => {
                const nuevaCantidad = valorPrevio[x.ID] + 1;
                return ({
                    ...valorPrevio,
                    [x.ID]: x.stock >= nuevaCantidad ? nuevaCantidad : valorPrevio[x.ID]
                })
            })
        },
        []
    );

    const Decremento = useCallback(
        (x) => {
            setCantidadSolicitada(valorPrevio => {
                const nuevaCantidad = valorPrevio[x.ID] - 1;
                return ({
                    ...valorPrevio,
                    [x.ID]: nuevaCantidad >= 0 ? nuevaCantidad : valorPrevio[x.ID]
                })
            })
        },
        []
    );
    const construirCards = listaElementos => {
        return listaElementos.map(x => {
            console.log(JSON.stringify(x));
            return (
                <Card key={x.ID} className='cardsh' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={x.img} />
                    <Card.Body>
                        <Card.Title >{x.producto}</Card.Title>
                        <Card.Text className="contenidoCard">
                            {x.descripcion}
                            <p className="contador">{Number(cantidadSolicitada[x.ID])}</p>
                        </Card.Text>
                        <Button onClick={() => Incremento(x)} variant="primary">+</Button>
                        <Button onClick={() => Decremento(x)} variant="primary">-</Button>
                        <div>
                            <Button variant="primary">Agregar al Carrito</Button>
                        </div>
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
