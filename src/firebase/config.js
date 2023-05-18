import { initializeApp } from 'firebase/app'
import { collection, getFirestore } from 'firebase/firestore'
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyB-SXFZpNqUWx_U5aXc0-aHeydAmAjqgHk",
    authDomain: "momcare-app.firebaseapp.com",
    projectId: "momcare-app",
    storageBucket: "momcare-app.appspot.com",
    messagingSenderId: "456550180864",
    appId: "1:456550180864:web:47bf6df22f6bdc5c49d0e5",
    measurementId: "G-3L5Z3T1N9H"
};

initializeApp(firebaseConfig)

export const db = getFirestore()
export const mom = collection(db, 'mother')
export const midwives = collection(db, 'midwife')
export const records = collection(db, 'records')