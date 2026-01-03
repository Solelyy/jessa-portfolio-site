import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Footer from "./components/layout/Footer";
import { useState } from "react";
import ContactModal from "./components/modal/ContactModal";

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col p-12 bg-lightBg dark:bg-darkBg text-black dark:text-white">

    <header>
      <Navbar onContactClick={() => setIsContactOpen(true)}/>
    </header>

    <main className="grow">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />}/>
      </Routes>

      <ContactModal 
      isOpen= {isContactOpen}
      onClose={() => setIsContactOpen(false)}
      />

    </main>

    <footer>
      <Footer />
    </footer>
    </div>
  );
}
