import React from 'react'
import Items from './Items';

function ItemsLits({items}) {
    return (
        <div className="container-fluid row align-items-start justify-content-between">
            <Items />
        </div>
    )
}

export default ItemsLits
