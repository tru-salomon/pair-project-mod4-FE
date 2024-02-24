import { Link } from 'react-router-dom';
import "./NavBar.css"
const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/list" className="nav-link">Heroes</Link>
            <br />
            <Link to="/new" className="nav-link">New Hero</Link>
        </nav>
    );
};

export default Navbar;
