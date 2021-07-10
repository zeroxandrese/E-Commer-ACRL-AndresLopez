import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './Items.css';

function ItemCount({ stock, onAdd }) {
    const [agregar, setAgregar] = useState(stock ? 1 : 0);

    return (
        <div>
            <p className="contador">{agregar}</p>
            <Button onClick={() => setAgregar(agregar === stock ? agregar : agregar + 1)} variant="primary">+</Button>
            <Button onClick={() => setAgregar(agregar - 1 ? agregar - 1 : agregar)} variant="primary">-</Button>
            <div>
                {stock >= 1 ? <Button onClick={() => onAdd(agregar)} variant="primary">Agregar al Carrito</Button> : "NO TENEMOS STOCK DE ESTE PRODUCTO"}

            </div>
        </div>
    )
}

export default ItemCount
