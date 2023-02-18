import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';

function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function changeEmail(e) {
        setEmail(e.target.value);
    }

    function changePassword(e) {
        setPassword(e.target.value);
    }

    function register() {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate('/pokedex');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    return (
        <div>
            <h1>Register</h1>
            <div>
                <input type="email" placeholder="email" onChange={changeEmail} />
                <input type="password" placeholder="password" onChange={changePassword} />
                <button onClick={register}>Registrarse</button>
            </div>
        </div>
    )
}

export default Register