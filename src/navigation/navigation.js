import { Link } from "react-router-dom";
import './navigation.css'
import { logOut, user } from '../services/authService';

function Navigation() {

    if (user === null) {
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
                    <li>
                        <Link to="/register">Register</Link>
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
                    <Link to="/play">Play</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li onClick={logOut}>
                    <Link to="/">Sing Out</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;