import React from "react";
import "../../style/FeaturedTokens.css";

const FeaturedTokens = () => {
  const tokens = [
    {
      id: 1,
      name: "Pippin",
      symbol: "pippin",
      fdv: "$29M",
      change: "-10.6%",
      type: "negative",
      img: "pippin.png",
    },
    {
      id: 2,
      name: "Limitless Official Token",
      symbol: "LMTS",
      fdv: "$115M",
      change: "+3.9%",
      type: "positive",
      verified: true,
      img: "limitless.png",
    },
    {
      id: 3,
      name: "Moonbirds",
      symbol: "BIRB",
      fdv: "$137.2M",
      change: "+2.9%",
      type: "positive",
      verified: true,
      img: "moonbirds.png",
    },
    {
      id: 4,
      name: "Seamless",
      symbol: "SEAM",
      fdv: "$6.5M",
      change: "-7.8%",
      type: "negative",
      verified: true,
      img: "seamless.png",
    },
    {
      id: 9,
      name: "Limitless Official Token",
      symbol: "LMTS",
      fdv: "$115M",
      change: "+3.9%",
      type: "positive",
      verified: true,
      img: "limitless.png",
    },
    {
      id: 11,
      name: "Moonbirds",
      symbol: "BIRB",
      fdv: "$137.2M",
      change: "+2.9%",
      type: "positive",
      verified: true,
      img: "moonbirds.png",
    },
    {
      id: 41,
      name: "Seamless",
      symbol: "SEAM",
      fdv: "$6.5M",
      change: "-7.8%",
      type: "negative",
      verified: true,
      img: "seamless.png",
    },
    {
      id: 42,
      name: "Limitless Official Token",
      symbol: "LMTS",
      fdv: "$115M",
      change: "+3.9%",
      type: "positive",
      verified: true,
      img: "limitless.png",
    },
    {
      id: 37,
      name: "Moonbirds",
      symbol: "BIRB",
      fdv: "$137.2M",
      change: "+2.9%",
      type: "positive",
      verified: true,
      img: "moonbirds.png",
    },
    {
      id: 412,
      name: "Seamless",
      symbol: "SEAM",
      fdv: "$6.5M",
      change: "-7.8%",
      type: "negative",
      verified: true,
      img: "seamless.png",
    },
    {
      id: 52,
      name: "Sport.fun",
      symbol: "FUN",
      fdv: "$37.3M",
      change: "+7.6%",
      type: "positive",
      verified: true,
      img: "sport.png",
    },
  ];

  return (
    <div id="fnt-featured-section-container">
      <header id="fnt-header-group">
        <h2 id="fnt-main-title">Featured Tokens</h2>
        <p id="fnt-sub-heading">This week's curated tokens</p>
      </header>

      <div id="fnt-token-grid-layout">
        {tokens.map((token) => (
          <div key={token.id} className="fnt-token-card-wrapper">
            <div className="fnt-card-media-context">
              <img
                src={token.img}
                alt=""
                className="fnt-card-background-asset"
              />
              <div className="fnt-card-overlay-gradient"></div>
            </div>

            <div className="fnt-card-content-footer">
              <div className="fnt-identity-row">
                <div className="fnt-avatar-container">
                  <img
                    src={token.img}
                    alt=""
                    className="fnt-token-icon-small"
                  />
                </div>
                <div className="fnt-label-stack">
                  <span className="fnt-token-display-name">
                    {token.name}{" "}
                    <span className="fnt-token-ticker">{token.symbol}</span>
                    {token.verified && (
                      <span className="fnt-verified-badge">✓</span>
                    )}
                  </span>
                </div>
              </div>

              <div className="fnt-metric-row">
                <span className="fnt-fdv-label">FDV {token.fdv}</span>
                <span
                  className={`fnt-percent-change ${token.type === "negative" ? "fnt-state-down" : "fnt-state-up"}`}
                >
                  {token.change}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedTokens;
