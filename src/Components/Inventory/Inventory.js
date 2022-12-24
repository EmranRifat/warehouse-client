import React from 'react';
import useProducts from '../hooks/useProducts';
import InventoryItem from '../InventoryItem/InventoryItem';
import './Inventory.css'

const Inventory = () => {
    const [items] = useProducts();
    return (
        <div>
            <h2 className='mb-4 d-flex text-align-center justify-content-center  fw-bold'>Inventory All Products: {items.length}</h2>
            <div className='service'>

                {
                    items.map(item =>  <InventoryItem
                        key={item._id}
                        item={item}
                    ></InventoryItem>)
                }
                {/* <button className='delever'>Delevered</button> */}

            </div>

        </div >
    );
};

export default Inventory;
