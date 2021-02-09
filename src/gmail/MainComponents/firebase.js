import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyC8BVzIjT1qCjXmsy03046fKuNpkQeeS7Q',
  authDomain: 'fir-d122a.firebaseapp.com',
  projectId: 'fir-d122a',
  storageBucket: 'fir-d122a.appspot.com',
  messagingSenderId: '752827066006',
  appId: '1:752827066006:web:f13db511935a0e07b104b7',
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
