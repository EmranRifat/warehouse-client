import React, { useState } from 'react';
import './InventoryItem.css'

const InventoryItem = (props) => {
    const { name, img, _id, price, description, quantity, supplier } = props.item;

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://desolate-reef-26430.herokuapp.com/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log(data));
        }

    }
    return (
        <div className=' col-sm-12 col-lg-4 col-md-6'>
            <div class="card " style={{ width: "18rem" }}>
                <img className='w-100' style={{ height: "12rem" }} src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <small class="card-text">{description}</small>
                    <p>Id: {_id}</p>
                    <p className='fw-bold' d >Price: {price}</p>
                    {/* <p>Supplier: {supplier}</p> */}
                    <p>Quantity: {quantity}</p>
                    <button onClick={() => handleDelete()} className='delever'>Delivered</button>


                    {/* <Link onClick={() => naviagteServiceDetail(id)} href="" class="btn btn-primary book-btn">Book Now</Link> */}
                </div>

            </div>
        </div>
    );
};

export default InventoryItem;