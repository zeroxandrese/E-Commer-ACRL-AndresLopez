import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { itemsCollection } from '../firebase';

function ItemDetailContainer() {
  const { id } = useParams();
  const [ items, setItems ] = useState([]);
  

  useEffect(() => {
      (async()=>{
        const response = await itemsCollection.doc(id).get()
        setItems({ id: response.id, ...response.data() })
      })() 
  }, [id]) 

    return (
        <div>
             <ItemDetail producto={items}/>
        </div>
    )
}

export default ItemDetailContainer
