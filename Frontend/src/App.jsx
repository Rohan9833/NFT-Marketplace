import "@fortawesome/fontawesome-free/css/all.min.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";

function App() {
  // <Routes>
    <Route path="/" element={<Home />} />

  //   <Route path="/explore" element={<Explore />} />

  //   <Route path="/create" element={<Create />} />

  //   <Route path="/profile" element={<Profile />} />
  // </Routes>;
  return (
    <>
      <Navbar />
      <Home/>
      <Footer />
    </>
  );
}

export default App;
