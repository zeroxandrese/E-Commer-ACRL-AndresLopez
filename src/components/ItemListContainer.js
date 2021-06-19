import React from 'react'
import './ItemListContainer.css';

function ItemListContainer(props) {
    return (
        <div className="contenido container-fluid text-center">
            <h2>{props.titulo}</h2>
            <p>{props.parrafo}</p>
        </div>
    )
}

export default ItemListContainer;
