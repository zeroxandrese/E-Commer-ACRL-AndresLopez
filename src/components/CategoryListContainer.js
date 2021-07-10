import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { Card } from 'react-bootstrap';
import './Items.css';

function CategoryListContainer() {
    const { categoryName } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await fetch('https://run.mocky.io/v3/b2d48a90-be5b-4cef-88e8-092e545bc629');
            if(!categoryName) return setItems(data);
            const item = await data.json();
            const categoryFinal = item.filter(x => x.category === categoryName);
            setItems(categoryFinal);
        })();
    }, [categoryName]);

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
