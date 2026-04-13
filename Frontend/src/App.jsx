import "@fortawesome/fontawesome-free/css/all.min.css";
import {Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import About from "./Pages/About";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Learnnft from "./Pages/Learnnft";
import Home from "./Pages/Home";

function App() {
  return (
    <>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/learnnft" element={<Learnnft />} />
      </Routes>

      <Footer />

    </>
  );
}

export default App;