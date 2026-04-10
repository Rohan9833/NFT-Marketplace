import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", background: "#f8fbff" }}>
      
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 40px",
          background: "white",
          boxShadow: "0px 2px 8px rgba(0,0,0,0.1)"
        }}
      >
        <h2 style={{ color: "#2563eb" }}>MyWebsite</h2>

        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <a href="#">Home</a>
          <a href="#">About Us</a>

          <button
            style={{
              padding: "8px 18px",
              borderRadius: "10px",
              border: "none",
              background: "#2563eb",
              color: "white",
              cursor: "pointer"
            }}
          >
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        style={{
          textAlign: "center",
          marginTop: "120px"
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to NFT Marketplace 🚀
        </motion.h1>

        <p style={{ marginTop: "20px", color: "gray" }}>
          Buy, sell and explore amazing NFTs easily with our platform.
        </p>

        <button
          style={{
            marginTop: "25px",
            padding: "10px 25px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer"
          }}
        >
          Explore NFTs
        </button>
      </div>
    </div>
  );
}