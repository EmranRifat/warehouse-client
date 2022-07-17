import React from 'react';
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';
import Social from '../Social/Social';
import Album from '../Album/Album'



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cards></Cards>
            <Album></Album>
            <Social></Social>
        </div>
    );
};

export default Home;