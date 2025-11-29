import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Apropos from "./pages/Apropos";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./Navbar";

function App() {    
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/apropos" element={<Apropos />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
