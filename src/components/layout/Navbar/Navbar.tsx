import {Link} from "react-router-dom";
import logo from "@/assets/logos/logo-jg.png";

export default function Navbar() {
    return (
        <nav> 
            <Link to="/">
            <img src={logo} alt="website's logo" />
            </Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
}