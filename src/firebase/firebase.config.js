// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgeZlABRPf0YUkQjgquCnwvoF-Vv3F6Bk",
    authDomain: "chef-recipe-hunting-64b73.firebaseapp.com",
    projectId: "chef-recipe-hunting-64b73",
    storageBucket: "chef-recipe-hunting-64b73.appspot.com",
    messagingSenderId: "286107266457",
    appId: "1:286107266457:web:caf5cb8049eff52ccfb708"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;