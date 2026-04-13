import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import Learnnft from "./Pages/Learnnft";
function App() {
  return (
    <Router>
    
      <Navbar/>

      <Routes>

        <Route path="/about" element={<About />} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Learnnft" element={<Learnnft/>} />
      </Routes>

      <Footer/>

    </Router>
  );
}

export default App;