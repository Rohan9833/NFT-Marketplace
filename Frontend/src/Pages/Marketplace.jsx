import React from 'react';
import '../Style/Marketplace.css'; 

const nftData = [
  { id: 1, title: "Cosmic Voyager", collection: "Space Collection", price: "0.45 ETH", usd: "$1,125.50", likes: "1.2K", author: "@stellarin" },
  { id: 2, title: "Golden Cyborg", collection: "Future Humans", price: "0.68 ETH", usd: "$1,701.35", likes: "857", author: "@cyberartz" },
  { id: 3, title: "Pixel Yak #4521", collection: "Yaks Universe", price: "0.23 ETH", usd: "$574.25", likes: "2.1K", author: "@yaksuniverse" },
  { id: 4, title: "Neon Skull", collection: "Dark Collection", price: "0.35 ETH", usd: "$876.40", likes: "1.5K", author: "@darkside" },
  { id: 5, title: "Cyber Girl", collection: "Anime Collection", price: "0.55 ETH", usd: "$1,376.85", likes: "965", author: "@animeworld" },
  { id: 6, title: "Voxel Land", collection: "Voxel Collection", price: "0.40 ETH", usd: "$999.20", likes: "1.1K", author: "@voxels" },
  { id: 7, title: "Abstract Dreams", collection: "Abstract Art", price: "0.30 ETH", usd: "$749.50", likes: "789", author: "@abstractio" },
  { id: 8, title: "Neon Rider", collection: "Cyber Collection", price: "0.60 ETH", usd: "$1,499.00", likes: "1.3K", author: "@cyberdrive" },
  { id: 9, title: "Bored Ape #8123", collection: "Bored Ape Club", price: "1.25 ETH", usd: "$3,123.45", likes: "2.3K", author: "@boredapeyc" },
  { id: 10, title: "Music Vibes", collection: "Sound Collection", price: "0.28 ETH", usd: "$699.30", likes: "642", author: "@soundwave" },
  { id: 11, title: "Ice Lion", collection: "Animals Collection", price: "0.49 ETH", usd: "$1,223.70", likes: "1.7K", author: "@wildverse" },
  { id: 12, title: "Fantasy Castle", collection: "Fantasy World", price: "0.33 ETH", usd: "$824.15", likes: "880", author: "@fantasyland" }
];

export default function Marketplace() {
  return (
    <div className="mkp-nft-container">
      
      {/* 2. Hero Section */}
      <header className="mkp-hero-section">
        <div className="mkp-hero-content">
          <h1 className="mkp-hero-title">
            Discover, Collect <br />& Own <span className="mkp-text-gradient">Extraordinary</span> <br />NFTs
          </h1>
          <p className="mkp-hero-subtitle">
            Explore digital art, collectibles, music, domain names and more on the world's best NFT marketplace.
          </p>
          <div className="mkp-hero-buttons">
            <button className="mkp-btn-primary mkp-btn-large">Create NFTs </button>
            <button className="mkp-btn-secondary mkp-btn-large">How it works ⏱</button>
          </div>
        </div>
        <div className="mkp-hero-image-wrapper">
          <div className="mkp-hero-glow"></div>
          <img src="/Display.png" alt="Featured Ape NFT" className="mkp-hero-img" />
        </div>
      </header>

      {/* 3. Banner */}
      <section className="mkp-list-nft-banner">
        <div className="mkp-banner-left">
          <div className="mkp-banner-icon">＋</div>
          <div>
            <h3 className="mkp-banner-title">List Your NFT</h3>
            <p className="mkp-banner-desc">List your NFT collection and start earning now.</p>
          </div>
        </div>
        <button className="mkp-btn-primary mkp-btn-banner">List NFT</button>
      </section>

      {/* 4. Trending Section */}
      <section className="mkp-trending-section">
        <div className="mkp-trending-header">
          <h2 className="mkp-section-title">Trending NFTs 🔥</h2>
          <div className="mkp-filter-wrapper">
            <div className="mkp-categories-tabs">
              {["All", "Art", "Collectibles", "Music", "Photography", "Domain Names"].map((tab, i) => (
                <button key={i} className={`mkp-tab-btn ${i === 0 ? 'mkp-active' : ''}`}>
                  {tab}
                </button>
              ))}
            </div>
            <select className="mkp-sort-select">
              <option>Sort by: Popular</option>
            </select>
          </div>
        </div>

        {/* NFT Grid */}
        <div className="mkp-nft-grid">
          {nftData.map((nft) => (
            <div key={nft.id} className="mkp-nft-card">
              <div className="mkp-card-image-box">
                <img src="https://via.placeholder.com/400" alt={nft.title} className="mkp-card-img" />
                <span className="mkp-like-badge">❤️ {nft.likes}</span>
              </div>
              <div className="mkp-card-details">
                <div className="mkp-card-info-row">
                  <div>
                    <h4 className="mkp-card-title">{nft.title}</h4>
                    <p className="mkp-card-collection">{nft.collection}</p>
                  </div>
                  <div className="mkp-card-price-box">
                    <p className="mkp-card-eth">{nft.price}</p>
                    <p className="mkp-card-usd">{nft.usd}</p>
                  </div>
                </div>
                <div className="mkp-card-author-row">
                  <div className="mkp-author-avatar">
                    <img src="https://via.placeholder.com/50" alt="avatar" />
                  </div>
                  <span className="mkp-author-name">{nft.author}</span>
                  <span className="mkp-verified-tick">✓</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mkp-load-more-box">
          <button className="mkp-btn-load-more">
            Load More NFTs <span className="mkp-refresh-icon">🔄</span>
          </button>
        </div>
      </section>

    </div>
  );
}