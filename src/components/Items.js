import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';
import './Items.css';
import { itemsCollection } from '../firebase';

function Items() {
const [items, setItems] = useState([]);

  useEffect(() => {
    (async() => {
        const response = await itemsCollection.get();
        setItems(response.docs.map(items => ({id: items.id, ...items.data()})))
    })();
  }, [])

   const construirCards = itemsList => {
        return itemsList.map(x => {
            return (
                <Card  className="cardsh" key={x.ID} style={{ width: '15rem' }}>
                    <Link to={`/items/${x.id}`}>
                        <Card.Img variant="top" src={x.img} width='15px' height='175px' />
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

            { construirCards(items) }

        </div>
    )
}

export default Items
