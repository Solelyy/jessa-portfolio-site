import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <nav> 
            <Link to="/"></Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
}