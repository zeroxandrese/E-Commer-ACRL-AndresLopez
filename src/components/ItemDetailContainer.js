import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
    const { id } = useParams();
    const [elemento, setElemento] = useState({});


    useEffect(() => {
        (async () => {
            const data = await fetch('https://run.mocky.io/v3/b2d48a90-be5b-4cef-88e8-092e545bc629');
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
