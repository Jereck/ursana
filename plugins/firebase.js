import firebase from 'firebase/app';
import 'firebase/firestore';

if (!firebase.apps.length){
    const config = {
        apiKey: "AIzaSyAxg0oRHu-7R2X2CQ9zKLdbczk9tdJd4jY",
        authDomain: "ursana-52717.firebaseapp.com",
        databaseURL: "https://ursana-52717.firebaseio.com",
        projectId: "ursana-52717",
        storageBucket: "ursana-52717.appspot.com",
        messagingSenderId: "452221361600",
        appId: "1:452221361600:web:428ef394794528561f7c25",
        measurementId: "G-VJRNY0G8M3"
    }
    firebase.initializeApp(config);
}

const fireDb = firebase.firestore();
export { fireDb };