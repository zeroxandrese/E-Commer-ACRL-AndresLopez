import React from 'react'
import './ItemListContainer.css';
import ItemsList from './ItemsList';
import Footer from './Footer';


function ItemListContainer(props) {
    return (
        <div className="contenido container-fluid text-center">
            <h2>{props.titulo}</h2>
            <p>{props.parrafo}</p>
            <div className='d-flex p-2 bd-highlight'>
                <ItemsList />
            </div>
            <div className="row container-fluid justify-content-center">
                <Footer />
            </div>
        </div>
    )
}

export default ItemListContainer;
