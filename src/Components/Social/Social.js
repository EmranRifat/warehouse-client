import React from 'react';
import './Social.css'

const Social = () => {
    return (
        <section className='social m-5 field' >

            <div>
                <h2 >VIEW MORE LET-US KNOW</h2>
                <h5 >Subscribe to our news to be updated  </h5>
                <input className='form-input' type="text" placeholder="Your Comments" /> <br />
                <button class="buy-now">Submit Here</button>
            </div>

            <div className='icons'>
                <h3 id='follow' >SUBCRIBE AND FOLLOW US..</h3>
                <a href=""><i class="fab fa-instagram"></i></a>
                <a href=""><i class="fab fa-facebook-square"></i></a>
                <a href=""><i class="fab fa-twitter"></i></a>
                <a href=""><i class="fab fa-youtube"></i></a>
            </div>


        </section >

    );
};

export default Social;