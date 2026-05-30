import React, { useState, useEffect } from "react";
import "../../Style/Hero.css";

import { createThirdwebClient, getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { totalSupply } from "thirdweb/extensions/erc721";
import { getNFTs } from "thirdweb/extensions/erc721";

const client = createThirdwebClient({
  clientId: import.meta.env.VITE_THIRDWEB_CLIENT_ID,
});

const contract = getContract({
  client,
  chain: sepolia,
  address: import.meta.env.VITE_CONTRACT_ADDRESS,
});

const Hero = () => {
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
  // Toggle state manage karne ke liye
  const [activeTab, setActiveTab] = useState("NFTs");
  const [activeCategory, setActiveCategory] = useState("All");
  const [nfts, setnfts] = useState(collections);
  useEffect(() => {
    async function checkNFTs() {
      const supply = await totalSupply({
        contract,
      });
      const nfts = await getNFTs({
        contract,
      });
      setnfts(nfts);

      console.log("Total NFTs:", supply.toString());
      console.log(nfts[nfts.length - 1]);
    }
    checkNFTs();
  }, []);

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
                src={nfts[nfts.length - 1]?.metadata?.image_url?.replace(
                  "ipfs://",
                  "https://ipfs.io/ipfs/",
                )}
                alt="Collection"
                className="hero-img"
              />
            </div>
            <div className="hero-text-box">
              <h1 className="hero-title">
                {nfts[nfts.length - 1]?.metadata?.name} <span className="check-icon">✓</span>
              </h1>
              <p className="hero-subtitle">{nfts[nfts.length - 1]?.metadata?.description}</p>

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
            {/* <span>FLOOR</span> */}
          </div>

          <div className="ranking-list">
            {nfts
              ?.slice()
              .reverse()
              .map((item, idx) => (
                <div key={idx} className="ranking-row">
                  <div className="ranking-info">
                    <img
                      height={55}
                      width={55}
                      src={item?.metadata?.image?.replace(
                        "ipfs://",
                        "https://ipfs.io/ipfs/",
                      )}
                      alt={item?.metadata?.name}
                    />
                    <span className="ranking-name">
                      {item?.metadata?.name || "Loading..."}
                    </span>
                  </div>
                  <div className="ranking-price-box">
                    <span className="ranking-price">
                      {item?.metadata?.description || "Loading..."}
                    </span>
                    {/* <span className={item.positive ? "pct-up" : "pct-down"}>
                      {item.change}
                    </span> */}
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
