// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5Pm10oW8HiHSS8Qm1CtQkXLla-AOkafY",
    authDomain: "ware-house-39886.firebaseapp.com",
    projectId: "ware-house-39886",
    storageBucket: "ware-house-39886.appspot.com",
    messagingSenderId: "551555576394",
    appId: "1:551555576394:web:c500bca5920698be70ecb3"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
// export default app;

