import React from 'react';
import photo from '../../image/notFound/404.jpg'

const NotFound = () => {
    return (
        <div>
            <h2>oops.! Page is not found...</h2>
            <img src={photo} alt="" />
        </div>
    );
};

export default NotFound;