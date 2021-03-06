import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Cards.css'

const Cards = () => {

    const [cards, setCards] = useState([]);
    const card2 = cards.slice(0, 6)
    // https://desolate-reef-26430.herokuapp.com/service
    useEffect(() => {
        fetch('https://desolate-reef-26430.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setCards(data));
    }, []);

    return (
        <div id="features" className='container'>
            <h1 className=' text-center mt-5 feature'>OUR FEATURED CATEGORIES</h1>
            <p className='text-center mt-4 fw-500'>Explore our exclusive categories, find photographers <br /> you would love to explore and hire.</p>

            <div className='services '>
                {
                    card2.map(card => <Card
                        key={card._id}
                        card={card}
                    > </Card>)
                }
            </div>

        </div>
    );
};

export default Cards;