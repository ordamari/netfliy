import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed'

// we need seed the database

// we need config here
const config = {
    apiKey: "AIzaSyC10p9ygTyHvatlqY4LwEwud7tn4Ydh5M0",
    authDomain: "netfliy-47227.firebaseapp.com",
    projectId: "netfliy-47227",
    storageBucket: "netfliy-47227.appspot.com",
    messagingSenderId: "856908378209",
    appId: "1:856908378209:web:128944bde623bde9fbba20"
};

const firebase = Firebase.initializeApp(config);


export { firebase };