import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"


var firebaseConfig = {
    apiKey: "AIzaSyCAixQJiETtQ7IbOtvJp4GWQaNzP3WDI0A",
    authDomain: "twitter-clone-b.firebaseapp.com",
    projectId: "twitter-clone-b",
    storageBucket: "twitter-clone-b.appspot.com",
    messagingSenderId: "832888607412",
    appId: "1:832888607412:web:8a12c2d18dab12c7d33de1"
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();