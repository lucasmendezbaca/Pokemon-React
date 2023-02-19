import React, { useState } from 'react';
import { register as serviceRegister} from '../services/authService';
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
        serviceRegister(email, password);
        navigate('/pokedex');
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