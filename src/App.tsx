import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/layout/Footer";
import ProfileCard from "./components/cards/ProfileCard";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col p-12 bg-lightBg dark:bg-darkBg text-black dark:text-white">

    <header>
      <Navbar />
    </header>

    <main className="grow">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </main>

    <footer>
      <Footer />
    </footer>
    </div>
  );
}
