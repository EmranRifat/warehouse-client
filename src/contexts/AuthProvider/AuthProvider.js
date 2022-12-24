import { getAuth } from 'firebase/auth';
import React from 'react';
import app from '../../Firebase.init';



const auth =getAuth(app);
const AuthProvider = () => {
    return (
        <div>
            
        </div>
    );
};

export default AuthProvider;