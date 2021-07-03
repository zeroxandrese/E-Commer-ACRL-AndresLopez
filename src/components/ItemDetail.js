import React from 'react';

function ItemDetail({ID, descripcion, producto, stock, img, category}) {
    return (
        <div>
            <h1>{producto}</h1>
            <img src={img} alt="imagen producto" />
            <h4>{descripcion}</h4>
            <p>{stock}</p>
            <p>{category}</p>
        </div>
    )
}

export default ItemDetail
