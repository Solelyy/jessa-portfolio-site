import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import Personal from "./pages/Personal";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col p-4 md:p-6 bg-lightBg dark:bg-darkBg text-black dark:text-white">

    <header>
      <Navbar />
    </header>
    <main className="grow">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/personal" element={<Personal />}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>

    <footer>
      <Footer />
    </footer>
    </div>
  );
}
