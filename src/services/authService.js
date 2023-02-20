import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebaseConfig';
import React, { useState, createContext, useContext } from 'react';

export const currentUser = auth.currentUser;
export const UserContext = createContext(null);

export function UserContextProvider({ children }) {
    const [user, setUser] = useState('usuario');

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export async function register(email, password) {
    await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // user = userCredential.user;
            // console.log(user);
            console.log(userCredential.user)
            currentUser = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
}

export function logIn(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
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
