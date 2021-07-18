import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './Items.css';

function ItemCount({ producto, onAdd }) {
    const [agregar, setAgregar] = useState(1);

    return (
        <div>
            <p className="contador">{agregar}</p>
            <Button onClick={() => setAgregar(agregar === producto.stock ? agregar : agregar + 1)} variant="primary">+</Button>
            <Button onClick={() => setAgregar(agregar - 1 ? agregar - 1 : agregar)} variant="primary">-</Button>
            <div>
                {producto.stock >= 1 ? <Button onClick={() => onAdd(agregar)} variant="primary">Agregar al Carrito</Button> : "NO TENEMOS STOCK DE ESTE PRODUCTO"}

            </div>
        </div>
    )
}

export default ItemCount
