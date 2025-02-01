import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAq4ZLP2owVBKZxbW6QBYRiWi1Xa3grkzA",
    authDomain: "noah-s-ark-cdf80.firebaseapp.com",
    projectId: "noah-s-ark-cdf80",
    storageBucket: "noah-s-ark-cdf80.firebasestorage.app",
    messagingSenderId: "162541112695",
    appId: "1:162541112695:web:9ae9c4de1fe529cb3ae572",
    measurementId: "G-S0KT86S2YF",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

if (window.location.hostname === "localhost") {
    connectAuthEmulator(auth, "http://127.0.0.1:9099");
}

export {app, auth, db}
