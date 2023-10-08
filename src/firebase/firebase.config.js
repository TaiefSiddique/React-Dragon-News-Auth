// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTJ1JoDg7gYfOQiPpRdhbRKvPxjQQfzfo",
    authDomain: "react-dragon-news-auth-3d78d.firebaseapp.com",
    projectId: "react-dragon-news-auth-3d78d",
    storageBucket: "react-dragon-news-auth-3d78d.appspot.com",
    messagingSenderId: "123529809564",
    appId: "1:123529809564:web:ebc00a54ad91b7af246759"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = new getAuth(app);
export default auth;