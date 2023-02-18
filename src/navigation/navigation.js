import { Link } from "react-router-dom";
import './navigation.css'

function Navigation() {
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

export default Navigation;