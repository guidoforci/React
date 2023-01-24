import React from 'react';

const ItemListContainer = ({contadorDelItem}) => {
    return (
        <>
            <button className="btn btn-primary">AGREGADO ITEM LIST CONTAINER</button>
            <p>{contadorDelItem}</p>
        </>
    );
}

export default ItemListContainer;
