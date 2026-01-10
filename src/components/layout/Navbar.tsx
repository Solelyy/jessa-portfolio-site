import { Link } from "react-router-dom";
import darkMode from "@/assets/icons/darkmode.svg";
import lightMode from "@/assets/icons/lightmode.svg";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        return localStorage.getItem("theme") === "dark" ? "dark" : "light";
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    const themeIcon = theme === "dark" ? lightMode : darkMode;

    return (
        <nav className="bg-white/80 dark:bg-darkCard/80 backdrop-blur-md flex items-center py-2 px-6 rounded-full border border-lightBorder dark:border-darkBorder shadow-lg shadow-black/5 dark:shadow-black/20 justify-between h-14 w-fit mx-auto gap-8 transition-all duration-300">
            {/* Theme Toggle */}
            <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                aria-label="Toggle theme"
            >
                <img
                    src={themeIcon}
                    alt="theme-toggle-icon"
                    className="h-5 w-5 transition-transform duration-200 hover:scale-110"
                />
            </button>

            {/* Logo */}
            <Link
                to="/"
                className="transition-transform duration-200 hover:scale-105"
            >
                <img
                    src="/site-logo.png"
                    alt="website's logo"
                    className="h-14 w-auto"
                />
            </Link>

            {/* CTA Button */}
            <Link to="/contact">
                <button className="bg-accent hover:bg-accent/90 text-white font-semibold py-2 px-5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:shadow-md">
                    Let's Talk
                </button>
            </Link>
        </nav>
    );
}