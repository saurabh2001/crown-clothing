import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBzrbc903p0L3CsdeH4JgDtMr01uLrw74Y",
    authDomain: "crwn-db-1cf5d.firebaseapp.com",
    databaseURL: "https://crwn-db-1cf5d.firebaseio.com",
    projectId: "crwn-db-1cf5d",
    storageBucket: "",
    messagingSenderId: "501840352761",
    appId: "1:501840352761:web:072369c4cb8f6b68e31928",
    measurementId: "G-W7CXFCVRE9"
};


firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;