import React, { useState } from "react";
import "../../Style/Hero.css";

const Hero = () => {
  // Toggle state manage karne ke liye
  const [activeTab, setActiveTab] = useState("NFTs");
  const [activeCategory, setActiveCategory] = useState("All");

  const collections = [
    {
      name: "CryptoPunks",
      price: "27.99 ETH",
      change: "-0.9%",
      positive: false,
    },
    {
      name: "Courtyard.io",
      price: "3.97 USDC",
      change: "+2.1%",
      positive: true,
    },
    {
      name: "Bored Ape Yacht Club",
      price: "6.39 ETH",
      change: "0%",
      positive: true,
    },
    {
      name: "Pudgy Penguins",
      price: "4.22 ETH",
      change: "-0.7%",
      positive: false,
    },
    {
      name: "Mutant Ape Yacht Club",
      price: "1.04 ETH",
      change: "+5.1%",
      positive: true,
    },
  ];

  return (
    <div className="dashboard-root">
      {/* Top Filter Bar */}
      <div className="top-filter-bar">
        <div className="filter-left">
          {["All", "Gaming", "Art", "PFPs"].map((item) => (
            <button
              key={item}
              className={`nav-item-hero ${activeCategory === item ? "active-pill" : ""}`}
              onClick={() => setActiveCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="filter-right">
          <div className="toggle-container">
            {/* Dynamic Class logic using Ternary Operator */}
            <button
              className={`toggle-btn ${activeTab === "NFTs" ? "active-toggle" : ""}`}
              onClick={() => setActiveTab("NFTs")}
            >
              NFTs
            </button>
            <button
              className={`toggle-btn ${activeTab === "Tokens" ? "active-toggle" : ""}`}
              onClick={() => setActiveTab("Tokens")}
            >
              Tokens
            </button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="main-content-grid">
        {/* Left Hero Card */}
        <div className="hero-card-container">
          <div className="hero-flex">
            <div className="hero-image-box">
              <img
                src="https://placehold.co/400x500/0F172A/white?text=NFT+Artwork"
                alt="Collection"
                className="hero-img"
              />
            </div>
            <div className="hero-text-box">
              <h1 className="hero-title">
                Panini Blockchain <span className="check-icon">✓</span>
              </h1>
              <p className="hero-subtitle">By PaniniAmerica</p>

              <div className="hero-stats-row">
                <div className="stat-card">
                  <span className="stat-heading">FLOOR PRICE</span>
                  <span className="stat-data">0.0016 ETH</span>
                </div>
                <div className="stat-card">
                  <span className="stat-heading">ITEMS</span>
                  <span className="stat-data">670</span>
                </div>
                <div className="stat-card">
                  <span className="stat-heading">TOTAL VOLUME</span>
                  <span className="stat-data">0.71 ETH</span>
                </div>
                <div className="stat-card">
                  <span className="stat-heading">LISTED</span>
                  <span className="stat-data">29.1%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar List */}
        <aside className="sidebar-ranking">
          <div className="ranking-header">
            <span>COLLECTION</span>
            <span>FLOOR</span>
          </div>

          <div className="ranking-list">
            {collections.map((item, idx) => (
              <div key={idx} className="ranking-row">
                <div className="ranking-info">
                  <div className="ranking-avatar"></div>
                  <span className="ranking-name">{item.name}</span>
                </div>
                <div className="ranking-price-box">
                  <span className="ranking-price">{item.price}</span>
                  <span className={item.positive ? "pct-up" : "pct-down"}>
                    {item.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Hero;
