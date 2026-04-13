import "@fortawesome/fontawesome-free/css/all.min.css";
import {Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SmartContractLearn from "./Pages/LearnSmartContract";
import GasFee from "./Pages/GasFee"
import About from "./Pages/About";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Learnnft from "./Pages/Learnnft";
import Home from "./Pages/Home";
import MintingGasfee from "./Pages/MintingNft";

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
        <Route path="/learnsmartcontract" element={<SmartContractLearn/>} />
        <Route path="/learngasfee" element={<GasFee/>} />
        <Route path="/learnmintingnft" element={<MintingGasfee/>}/>


      </Routes>

      <Footer />

    </>
  );
}

export default App;