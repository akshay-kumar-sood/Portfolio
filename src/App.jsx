import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Certificates from "./components/Certificates"
import Footer from "./components/Footer"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import "./components/Navbar.css"
import "./components/Home.css"
import "./components/Certificates.css"
import "./components/Footer.css"
import "./components/Projects.css"
import "./components/Contact.css"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
