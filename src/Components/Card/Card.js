import { Button } from 'bootstrap';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Card.css'

const Card = (props) => {
    const navigate = useNavigate();

    const { name, img, _id, price, description, quantity, supplier } = props.card;

    const navigateServiceDetail = id => {
        navigate(`/service/${id}`);

    }
    const handleTost = () => {
        toast.success('Your order is confirm..!')

    }

    return (
        <div className='g-5 card-section '>
            <div class="card " style={{ width: "18rem" }}>
                <img className='w-100' style={{ height: "14rem" }} src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>
                    <p className=' fw-bold price '>Price: {price}</p>
                    <small className='supplier'>Supplier: {supplier}</small>
                    <p className='mt-0'>Quantity: {quantity}</p>
                    <p id='p-id'> Id :{_id}</p>

                    {/* <Link className='btn1 px-4 ' to="/inventory"> Update</Link> */}

                    <button onClick={() => navigateServiceDetail(_id)} href="" class="btn1 px-2">Details</button>

                    <button onClick={handleTost} href="" class="btn2  ">Buy Now</button>

                </div>
            </div>
        </div>
    );
};

export default Card;