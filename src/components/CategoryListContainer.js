import React, { useState, useEffect, useCallback } from 'react';
import { Link, useParams } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';
import './Items.css';

function CategoryListContainer() {
    const { categoryName } = useParams();
    const [items, setItems] = useState([]);
    const [cantidadSolicitada, setCantidadSolicitada] = useState({});

    useEffect(() => {
        (async () => {
            const data = await fetch('https://run.mocky.io/v3/b2d48a90-be5b-4cef-88e8-092e545bc629');
            if(!categoryName) return setItems(data);
            const item = await data.json();
            const categoryFinal = item.filter(x => x.category === categoryName);
            setItems(categoryFinal);
            const cantidadesIniciales = {};
        item.forEach(element => {
            cantidadesIniciales[element.ID] = 0;
        });
        setCantidadSolicitada(cantidadesIniciales)
        })();
    }, [categoryName]);

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
        return items.map(x => {
            return (
                <Card key={x.ID} className='cardsh' style={{ width: '18rem' }}>
                    <Link to={`/item/${x.ID}`}>
                        <Card.Img variant="top" src={x.img} />
                    </Link>
                    <Card.Body>
                        <Card.Title >{x.producto}</Card.Title>
                        <Card.Text className="contenidoCard">
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

            {construirCards(items)}

        </div>
    )
}

export default CategoryListContainer
