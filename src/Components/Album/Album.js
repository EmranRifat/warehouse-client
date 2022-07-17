import React from 'react';
import './Album.css'
import img1 from '../../image/banner/pexels-suzy-hazelwood-1120575.jpg'

const Album = () => {
    return (
        // <div className='group'>
        //     <h1 style={{ paddingTop: "5px" }} className='my-5  text-center fw-bold '>Why you choose us...</h1>
        //     <section className='album  row my-5 border-2 col-lg-4 col-sm-12' >

        //         <div style={{ backgroundColor: ' antiquewhite' }} className='shadow-lg '>
        //             <a className="d-flex justify-content-center fs-1 py-4" href=""><i
        //                 className="  fas fa-hands-helping"></i></a>
        //             <h2 className="fw-bolder"> Customization </h2>
        //             <p>We listen to your requirements and understand your business structure and process. Then we
        //                 work with you to develop custom products</p>
        //             <div>
        //                 <img className=" img" src={img1} alt="" />

        //                 {/* <img style="  border-radius: 50%;
        //         " className="m-auto w-100 py-2" src="" alt=""> */}

        //             </div>
        //             <a className="align-items-end button1 text-decoration-none my-2" target="_blank"
        //                 href="https://www.linkedin.com/in/emran-hasan-rifat-443454168/">
        //                 Learn more <i className="fas fa-arrow-right"></i></a>

        //         </div>

        //         <div style={{ backgroundColor: ' antiquewhite' }} className='shadow-lg '>
        //             <a className="d-flex justify-content-center fs-1 py-4" href=""><i
        //                 className="  fas fa-hands-helping"></i></a>
        //             <h2 className="fw-bolder"> Customization </h2>
        //             <p>We listen to your requirements and understand your business structure and process. Then we
        //                 work with you to develop custom products</p>
        //             <div>
        //                 <img className=" img" src={img1} alt="" />

        //                 {/* <img style="  border-radius: 50%;
        //         " className="m-auto w-100 py-2" src="" alt=""> */}

        //             </div>
        //             <a className="align-items-end button1 text-decoration-none my-2" target="_blank"
        //                 href="https://www.linkedin.com/in/emran-hasan-rifat-443454168/">
        //                 Learn more <i className="fas fa-arrow-right"></i></a>

        //         </div>

        //         <div style={{ backgroundColor: ' antiquewhite' }} className='shadow-lg'>
        //             <a className="d-flex justify-content-center fs-1 py-4" href=""><i
        //                 className="  fas fa-phone-volume"></i></a>
        //             <h2 className="fw-bolder"> Customization </h2>
        //             <p>We listen to your requirements and understand your business structure and process. Then we
        //                 work with you to develop custom products</p>
        //             <div>
        //                 <img className=" img" src={img1} alt="" />

        //                 {/* <img style="  border-radius: 50%;
        //         " className="m-auto w-100 py-2" src="" alt=""> */}

        //             </div>
        //             <a className="align-items-end button1 text-decoration-none my-2" target="_blank"
        //                 href="https://www.linkedin.com/in/emran-hasan-rifat-443454168/">
        //                 Learn more <i className="fas fa-arrow-right"></i></a>

        //         </div>
        //     </section >
        // </div >
        // ----------------------------------------------------------------------------
        <div className="client_section">
            <div className="client">
                <div className="client_text">
                    <h2 className="client_title">What Our Client Says</h2>
                    <p className="client_phrase">People's sharing their thought about our works</p>
                </div>

                <div className="client_content">
                    <span className="upper_comma comma">“</span>
                    <div className="client_review">
                        <div className="client_image">
                            <img className="client_image" src="https://sowelo.eu/wp-content/uploads/2014/03/kobieta1.jpg" alt="" />
                            {/* <img src="" alt="client image" className="client_image"> */}
                        </div>
                        <div className="client_review_text">
                            <small className="review">Integrate 360 campaign viral disrupt pair programming latte paradigm hacker 360 campaign cortado bootstrapping. Thinker-maker-doer paradigm affordances viral bootstrapping ship it human-centered design waterfall is so 2000 and late responsive integrate parallax. </small>

                            <div className="client_info">
                                <p className="client_name mt-2">Oimitri Vegas</p>
                                <small>London, English</small>
                            </div>
                        </div>
                    </div>
                    <span className="lower_comma comma">“</span>
                </div>
            </div>
        </div>





    );
};

export default Album;