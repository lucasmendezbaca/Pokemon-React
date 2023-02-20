import React, { useState, useContext } from 'react';
import { logIn as serviceLogIn, currentUser} from '../services/authService';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function changeEmail(e) {
        setEmail(e.target.value);
    }

    function changePassword(e) {
        setPassword(e.target.value);
    }

    function logIn() {
        serviceLogIn(email, password);
        navigate('/pokedex');
    }

    return (
        <div className='account-form-container'>
            <div className="registration" method="post">
            <h1>👋 Login!</h1>

            <label className="pure-material-textfield-outlined">
                <input placeholder=" " type="email" required onChange={changeEmail}/>
                <span>Email</span>
            </label>

            <label className="pure-material-textfield-outlined">
                <input placeholder=" " type="password" required onChange={changePassword} />
                <span>Password</span>
            </label>

            <button className="pure-material-button-contained" onClick={logIn}>Log In</button>

            <div className="progress">
                <progress className="pure-material-progress-circular" />
            </div>
            </div>

        </div>
    )


}

export default Login;