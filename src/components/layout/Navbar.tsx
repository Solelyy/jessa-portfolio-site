import {Link, NavLink} from "react-router-dom";
import darkMode from "@/assets/icons/darkmode.svg"
import lightMode from "@/assets/icons/lightmode.svg"
import { useEffect, useState } from "react";
import menu from "@/assets/icons/menu.svg";
import back from "@/assets/icons/menu-back.svg";
import NavActions from "../ui/NavActions";

export default function Navbar() {
    const baseNavLinkClass = ({isActive} : {isActive:boolean}) =>
        isActive 
        ? "font-bold text-accent border py-2 px-4 rounded-3xl shadow-md transition-all duration-200"
        : "font-regular hover:text-pink-500 transition-colors duration-200";

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

    //menu on mobile screens
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenu = () => setIsMenuOpen(prev => !prev);

    return (
        <>
        <nav className="bg-white/90 dark:bg-darkCard/90 backdrop-blur-sm flex gap-4 items-center py-2 px-8 md:px-4 rounded-3xl border border-lightBorder dark:border-darkBorder justify-between md:justify-evenly h-12 w-full md:w-1/2 mx-auto md:min-w-sm md:max-w-xl card-shadow transition-shadow duration-300 hover:shadow-xl"> 
            <Link to="/" className="transition-transform duration-200 hover:scale-105">
            <img 
            src="/site-logo.png"
            alt="website's logo"
            className="h-14 md:h-16 w-auto"
            />
            </Link>

            <NavActions 
            className={(props) => `${baseNavLinkClass(props)} hidden md:block`} 
            onItemClick={toggleTheme} 
            src={themeIcon}
            themeStyle="hidden md:block transition-transform duration-300 hover:rotate-12 hover:scale-110"
            />

            {/*Menu*/}
            <button 
            className="block md:hidden" 
            onClick={handleMenu}
            >
                <img src={menu} 
                alt="menu-icon"
                className="h-4 w-auto transition-transform duration-200 hover:scale-110 active:scale-95" />
            </button>
        </nav>

        {/* Overlay backdrop */}
        <div 
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 md:hidden
        ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={handleMenu}
        />

        {/* Mobile side menu */}
        <div 
        className={`mobile-menu 
        fixed top-0 right-0 h-full w-3/4 md:w-1/2 bg-white dark:bg-darkCard shadow-2xl p-4 z-50 pt-8.5 flex flex-col
        transform transition-all duration-300 ease-out
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"} 
        md:hidden`}
        >
            <button 
            onClick={handleMenu}
            className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 w-fit"
            >
                <img src={back} className="h-6 w-auto transition-transform duration-200 hover:scale-110 hover:-translate-x-0.5"></img>
            </button>

            <div className="flex flex-col items-center gap-10 pt-20">
                <NavActions 
                className={(props) => `${baseNavLinkClass(props)} md:hidden`} 
                onItemClick={toggleTheme} 
                src={themeIcon}
                themeStyle="md:hidden transition-transform duration-300 hover:rotate-12 hover:scale-110"
                />
            </div>
        </div>
        </>
    );
}