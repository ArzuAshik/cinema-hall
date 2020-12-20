import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from '../../firebaseConfig/firebaseConfig';


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const googleProvider = new firebase.auth.GoogleAuthProvider();


export const firebaseGoogleLogin = () => {
    return firebase.auth().signInWithPopup(googleProvider)
        .then(result => {
            const email = result.user.email;
            return { success: true, email: email };
        })
        .catch(error => {
            const errorMessage = error.message;
            return { success: false, msg: errorMessage };
        });

}