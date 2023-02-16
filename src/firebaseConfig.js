// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANgmxp5aGjFF6Wo9zGDxVFmOmzTuB2UCA",
    authDomain: "aidoc-auth.firebaseapp.com",
    projectId: "aidoc-auth",
    storageBucket: "aidoc-auth.appspot.com",
    messagingSenderId: "393193317677",
    appId: "1:393193317677:web:04bea49ac0b2000a4edfa4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signIn = () => {
    signInWithPopup(auth, provider).then((result) => {
        console.log(result);
        const name = result.user.displayName
        const email = result.user.email
        const profilePic = result.user.photoURL
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("profilePic", profilePic)
    }).catch((error) => {
        console.log(error);
    })

};

// firebase storage 
export const storage = getStorage(app);