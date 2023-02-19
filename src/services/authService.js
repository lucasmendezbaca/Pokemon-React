import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebaseConfig';

export const user = null; 

export async function register(email, password) {
    await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
}

export function logOut() {
    signOut(auth).then(() => {
        console.log('Sign-out successful');
        // this.router.navigate(['/']);
    }).catch((error) => {
        console.log('An error happened');
    });
}