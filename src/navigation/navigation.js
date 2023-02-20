import { Link } from "react-router-dom";
import './navigation.css'
import { logOut } from '../services/authService';

function Navigation({user}) {
    if (user) {
        return (
            <div>
                <ul className="menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/pokedex">Pokedex</Link>
                    </li>
                    <li>
                        <Link to="/play">Play</Link>
                    </li>
                    <li onClick={logOut}>
                        <Link to="/">Sing Out | {user.email}</Link>
                    </li>
                </ul>
            </div>
        );
    }

    return (
        <div>
            <ul className="menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/pokedex">Pokedex</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </div>
    );

}

export default Navigation;