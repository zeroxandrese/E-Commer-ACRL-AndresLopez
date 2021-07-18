import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { Card } from 'react-bootstrap';
import './Items.css';
import { itemsCollection } from '../firebase';

function CategoryListContainer() {
    const { categoryName } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        (async () => {
                let collection = itemsCollection;
                if (categoryName) collection = itemsCollection.where("category","==", categoryName)
                const response = await collection.get()
                setItems(response.docs.map(item => ({ id: item.id, ...item.data()})))
            
        })();
    }, [categoryName]);

    const construirCards = listaElementos => {
        return listaElementos.map(x => {
            return (
                <Card key={x.id} className='cardsh' style={{ width: '18rem' }}>
                    <Link to={`/items/${x.id}`}>
                        <Card.Img variant="top" src={x.img} />
                    </Link>
                    <Card.Body>
                        <Card.Title >{x.producto}</Card.Title>
                        <Card.Text className="contenidoCard">
                            <h6>Stock disponible</h6>
                            <p className="contador">{x.stock}</p>
                        </Card.Text>
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
