import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    if (user) {
        navigate('/home');
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        signInWithEmailAndPassword(email, pass);
        toast('Successfully login..!');
    }
    const navigateRegister = event => {
        navigate('/register')
    }

    return (

        <div className='container w-50 mx-auto'>
            <h2 className=' mt-5 text-primary text-center fw-bold'> Please Login First</h2>

            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3 mt-4 " controlId="formBasicEmail">
                    <Form.Control className="p-3" ref={emailRef} type="email" placeholder="Enter Your email:" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className="p-3" ref={passRef} type="password" placeholder="Enter your Password:" required />
                </Form.Group>
                x
                <p>Forget password? <Link to="/register" className='text-danger pe-auto' >Reset password!</Link></p>

                <Button className='w-50 mx-auto d-block mb-5' variant="primary" type="submit">
                    Login
                </Button>


                <p>New to Ware House.? <Link to="/register" onClick={navigateRegister} className='text-primary pe-auto' >Please Register here.!</Link></p>
            </Form>
            <SocialLogin></SocialLogin>
            <ToastContainer />


        </div>
    );
};

export default Login;