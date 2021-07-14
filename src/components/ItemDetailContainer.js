import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
    const { id } = useParams();
    const [elemento, setElemento] = useState({});


    useEffect(() => {
        (async () => {
            const data = await fetch('https://run.mocky.io/v3/6b696f7e-4939-405e-ae49-e6439fba2be4');
            const item = await data.json();
            const productoFinal = item.find(element => element.ID === +id);
            setElemento(productoFinal);

        })();
    }, [id]);

    return (
        <div>
            <ItemDetail {...elemento} />
        </div>
    )
}

export default ItemDetailContainer
