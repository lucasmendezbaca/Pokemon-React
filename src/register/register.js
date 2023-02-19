import React, { useState, useContext } from 'react';
import { register as serviceRegister} from '../services/authService';
import { useNavigate } from 'react-router-dom';
import './register.css';
import { UserContext } from '../services/authService';

function Register() {
    const user = useContext(UserContext);

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
                <p>{user.user}</p>
            </div>
        </div>
    )

}

export default Register