import React from 'react';
import './SocialLogin.css';
import Google from '../../../image/social/ppp.png';
import Facebook from '../../../image/social/fb.png';
import github from '../../../image/social/git2.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorElement;

    if (error) {

        errorElement = <p className='text-danger'>Error: {error.message}</p>


    }

    if (loading) {
        return <p>Loading...</p>;
    }

    if (user) {
        navigate('/home');
    }


    return (
        <div>
            <div className='d-flex align-items-center d-block'>
                <div style={{ height: "1px" }} className='bg-primary w-50 '></div>
                <p className='mt-2 px-2'>or</p>

                <div style={{ height: "1px" }} className='bg-primary w-50'></div>

            </div>
            {errorElement}
            <div >

                <button onClick={() => signInWithGoogle()} className='  w-50 d-block mx-auto my-2 btn'>
                    <img className='google' src={Google} alt="" />
                    <span className='px-2 x fs-5'>Google Sign In</span>
                </button>
                <button className='btn btn-primary w-50 d-block mx-auto my-2 '>
                    <img className='google' src={Facebook} alt="" />
                    <span className='px-2 x fs-5'>  Facebook Sign In</span>
                </button>

                <button className=' w-50 d-block mx-auto  btn-3 '>
                    <img className='google' src={github} alt="" />
                    <span className='px-2 x fs-5'>  Github Sign In</span>
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;