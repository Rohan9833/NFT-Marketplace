import React from 'react';
import '../Style/Wallet.css'; // Apni unique CSS file ka path check kar lena bhai

const myNFTs = [
  { id: 1, tag: "#2451", title: "Pikachu Love", collection: "GameFi Heroes", price: "0.25 ETH", likes: "120", img: "https://via.placeholder.com/300" },
  { id: 2, tag: "#1422", title: "Cyber Girl", collection: "CyberPunks", price: "0.45 ETH", likes: "89", img: "https://via.placeholder.com/300" },
  { id: 3, tag: "#8751", title: "Voxel Land", collection: "Voxel Worlds", price: "0.32 ETH", likes: "64", img: "https://via.placeholder.com/300" },
  { id: 4, tag: "#6321", title: "Golden Cyborg", collection: "Future Humans", price: "0.68 ETH", likes: "150", img: "https://via.placeholder.com/300" },
  { id: 5, tag: "#5532", title: "Abstract Dreams", collection: "Art Blocks", price: "0.30 ETH", likes: "75", img: "https://via.placeholder.com/300" },
  { id: 6, tag: "#4215", title: "Ice Lion", collection: "Animals Collection", price: "0.49 ETH", likes: "98", img: "https://via.placeholder.com/300" },
  { id: 7, tag: "#9987", title: "Neon Rider", collection: "Speed Racers", price: "0.60 ETH", likes: "110", img: "https://via.placeholder.com/300" },
  { id: 8, tag: "#7712", title: "Fantasy Castle", collection: "Fantasy World", price: "0.33 ETH", likes: "80", img: "https://via.placeholder.com/300" }
];

const tokenData = [
  { name: "NovaX (NVX)", type: "ERC-20", balance: "1,500 NVX", value: "$2,850.00", change: "+ 8.24%", isUp: true, icon: "N" },
  { name: "Jack Ronnie (JR)", type: "ERC-20", balance: "500 JR", value: "$1,250.00", change: "+ 4.75%", isUp: true, icon: "J" },
  { name: "USD Coin (USDC)", type: "ERC-20", balance: "2,000 USDC", value: "$2,000.00", change: "0.00%", isUp: null, icon: "U" },
  { name: "BNB (BNB)", type: "BEP-20", balance: "3.25 BNB", value: "$1,950.68", change: "+ 6.31%", isUp: true, icon: "B" }
];

export default function WalletDashboard() {
  return (
    <div className="wdb-container">
      
      {/* Top Profile Card / Wallet Overview */}
      <section className="wdb-overview-card">
        <div className="wdb-wallet-info">
          <p className="wdb-label">My Wallet</p>
          <h2 className="wdb-wallet-address">
            0x8A7C...F2D9 <span className="wdb-copy-icon">📋</span>
          </h2>
          <span className="wdb-status-badge">
            <span className="wdb-dot"></span> Connected
          </span>
          <p className="wdb-wallet-desc">
            This is your wallet overview. Track your assets, NFTs, tokens and overall portfolio value.
          </p>
          <div className="wdb-action-buttons">
            <button className="wdb-btn-dark">Send ↗</button>
            <button className="wdb-btn-light">Receive ↙</button>
          </div>
        </div>

        {/* Avatar Section */}
        <div className="wdb-avatar-wrapper">
          <div className="wdb-avatar-circle">
            <img src="https://via.placeholder.com/120" alt="Wallet Avatar" />
            <button className="wdb-edit-avatar">✏️</button>
          </div>
        </div>

        {/* Balance & Stats Info */}
        <div className="wdb-balance-info">
          <p className="wdb-label">Total Balance</p>
          <h1 className="wdb-total-amount">$12,450.68</h1>
          <p className="wdb-growth-text">▲ 12.5% (24h)</p>
          
          <div className="wdb-stats-grid">
            <div className="wdb-stat-box">
              <span className="wdb-stat-icon">💼</span>
              <p className="wdb-stat-title">Total Assets</p>
              <p className="wdb-stat-num">32</p>
            </div>
            <div className="wdb-stat-box">
              <span className="wdb-stat-icon">🖼️</span>
              <p className="wdb-stat-title">NFTs Owned</p>
              <p className="wdb-stat-num">24</p>
            </div>
            <div className="wdb-stat-box">
              <span className="wdb-stat-icon">🪙</span>
              <p className="wdb-stat-title">Tokens</p>
              <p className="wdb-stat-num">8</p>
            </div>
            <div className="wdb-stat-box">
              <span className="wdb-stat-icon">📊</span>
              <p className="wdb-stat-title">Collections</p>
              <p className="wdb-stat-num">6</p>
            </div>
          </div>
        </div>
      </section>

      {/* Assets & NFTs Section */}
      <section className="wdb-assets-section">
        <div className="wdb-section-header">
          <div>
            <h2 className="wdb-title">My Assets</h2>
            <p className="wdb-subtitle">View and manage all your digital assets in one place.</p>
          </div>
          <select className="wdb-sort-select">
            <option>Sort by: Recently Added</option>
          </select>
        </div>

        {/* Sub-tabs toggles */}
        <div className="wdb-tabs-row">
          <button className="wdb-tab-item wdb-tab-active">NFTs</button>
          <button className="wdb-tab-item">Tokens</button>
        </div>

        {/* NFT Grid layout */}
        <div className="wdb-nft-grid">
          {myNFTs.map((nft) => (
            <div key={nft.id} className="wdb-nft-card">
              <div className="wdb-card-img-box">
                <img src={nft.img} alt={nft.title} />
                <span className="wdb-tag-badge">{nft.tag}</span>
                <span className="wdb-menu-dots">•••</span>
              </div>
              <div className="wdb-card-info">
                <div className="wdb-card-header-row">
                  <h4 className="wdb-card-title">{nft.title}</h4>
                </div>
                <p className="wdb-card-collection">
                  {nft.collection} <span className="wdb-blue-tick">✓</span>
                </p>
                <div className="wdb-card-footer-row">
                  <span className="wdb-card-price">{nft.price}</span>
                  <span className="wdb-card-likes">❤️ {nft.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="wdb-center-box">
          <button className="wdb-btn-view-all">View All NFTs ❯</button>
        </div>
      </section>

      {/* Tokens Section */}
      <section className="wdb-tokens-section">
        <h3 className="wdb-title">Tokens</h3>
        <div className="wdb-table-responsive">
          <table className="wdb-token-table">
            <thead>
              <tr>
                <th>Token</th>
                <th>Balance</th>
                <th>Value (USD)</th>
                <th>Change (24h)</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tokenData.map((token, index) => (
                <tr key={index}>
                  <td>
                    <div className="wdb-token-cell">
                      <div className="wdb-token-icon-avatar">{token.icon}</div>
                      <div>
                        <p className="wdb-token-name">{token.name}</p>
                        <p className="wdb-token-type">{token.type}</p>
                      </div>
                    </div>
                  </td>
                  <td className="wdb-weight-600">{token.balance}</td>
                  <td className="wdb-weight-600">{token.value}</td>
                  <td className={`wdb-weight-600 ${token.isUp ? 'wdb-txt-green' : token.isUp === false ? 'wdb-txt-red' : ''}`}>
                    {token.change}
                  </td>
                  <td>
                    <button className="wdb-btn-details">Details 👁️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="wdb-center-box">
          <button className="wdb-btn-view-all">View All Tokens ❯</button>
        </div>
      </section>

    </div>
  );
}