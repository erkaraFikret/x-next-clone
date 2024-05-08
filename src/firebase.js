// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "x-next-v2-9dfb1.firebaseapp.com",
    projectId: "x-next-v2-9dfb1",
    storageBucket: "x-next-v2-9dfb1.appspot.com",
    messagingSenderId: "781002279550",
    appId: "1:781002279550:web:1c1020edc78a983293a62f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);