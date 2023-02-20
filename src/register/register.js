import React, { useState } from 'react';
import { register as serviceRegister, loginWithGoogle as loginWithGoogleService } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import './register.css';

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
        serviceRegister(email, password);
        navigate('/pokedex');
    }

    function loginWithGoogle() {
        loginWithGoogleService();
        // navigate('/pokedex');
    }

    return (
        <div className='account-form-container'>
            <div className="registration" method="post">
            <h1>👋 Register!</h1>

            <label className="pure-material-textfield-outlined">
                <input placeholder=" " type="email" required onChange={changeEmail}/>
                <span>Email</span>
            </label>

            <label className="pure-material-textfield-outlined">
                <input placeholder=" " type="password" required onChange={changePassword} />
                <span>Password</span>
            </label>

            <div>
                <span>Login with:</span>
                <button onClick={loginWithGoogle}>Google</button>
            </div>

            <button className="pure-material-button-contained" onClick={register}>Sign Up</button>

            <div className="progress">
                <progress className="pure-material-progress-circular" />
            </div>
            </div>

        </div>
    )

}

export default Register