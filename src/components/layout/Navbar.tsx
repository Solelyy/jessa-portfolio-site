import {Link, NavLink} from "react-router-dom";
import darkMode from "@/assets/icons/darkmode.svg"
import lightMode from "@/assets/icons/lightmode.svg"
import { useEffect, useState } from "react";

export default function Navbar() {
    const navLinkClass = ({isActive} : {isActive:boolean}) =>
        isActive 
        ? "font-bold text-accent border py-2 px-4 rounded-3xl shadow-md"
        : "font-regular hover:text-pink-500";

    const [theme, setTheme] = useState <"light" |"dark"> (() => {
        return localStorage.getItem("theme") === "dark" ? "dark" : "light"
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "dark" ? "light" : "dark"));
    };

    const themeIcon = theme === "dark" ? lightMode : darkMode;
    
    return (
        <nav className="bg-white dark:bg-darkCard flex gap-4 items-center py-2 px-4 rounded-3xl border border-lightBorder dark:border-darkBorder justify-evenly h-12 w-1/2 mx-auto min-w-sm"> 
            <Link to="/">
            <img 
            src="/site-logo.png"
            alt="website's logo"
            className="h-16 w-auto"
            />
            </Link>

            <NavLink to="/personal" className={navLinkClass}>Personal</NavLink>

            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>

            {/*Theme toggle */}
            <button
            onClick={toggleTheme}
            >
                <img src= {themeIcon}
                alt="theme-toggle-icon"
                className="h-6 w-auto" 
                />
            </button>
        </nav>
    );
}