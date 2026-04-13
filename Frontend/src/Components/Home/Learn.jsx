import React from "react";
import "../../style/Learn.css";

const FeaturedTokens = () => {
  const tokens = [
    {
      id: 1,
      title: "What is NFT",
      desc: "Digital ownership explained",
      img: "https://imgs.search.brave.com/qBvxUBBoFkGjYur7wjJbIxX0AoTyBaMypP8Z1PYFWts/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE5/NjkwNjIwNC92ZWN0/b3IvY3J5cHRvY3Vy/cmVuY3ktbWVtZS1j/b2luLXRva2VuLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1q/VU5KZGt5SHlYT3V5/Qi1rdjJHcG80OEVo/Vy13OFl1N1Eyamw3/ZU1md25VPQ",
    },
    {
      id: 2,
      title: "Smart Contracts",
      desc: "Automated blockchain logic",

      img: "https://imgs.search.brave.com/qBvxUBBoFkGjYur7wjJbIxX0AoTyBaMypP8Z1PYFWts/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE5/NjkwNjIwNC92ZWN0/b3IvY3J5cHRvY3Vy/cmVuY3ktbWVtZS1j/b2luLXRva2VuLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1q/VU5KZGt5SHlYT3V5/Qi1rdjJHcG80OEVo/Vy13OFl1N1Eyamw3/ZU1md25VPQ",
    },
    {
      id: 3,
      title: "Gas Fees",
      desc: "Transaction cost basics",

      img: "https://imgs.search.brave.com/qBvxUBBoFkGjYur7wjJbIxX0AoTyBaMypP8Z1PYFWts/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE5/NjkwNjIwNC92ZWN0/b3IvY3J5cHRvY3Vy/cmVuY3ktbWVtZS1j/b2luLXRva2VuLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1q/VU5KZGt5SHlYT3V5/Qi1rdjJHcG80OEVo/Vy13OFl1N1Eyamw3/ZU1md25VPQ",
    },
    {
      id: 4,
      title: "Minting NFT",
      desc: "Create blockchain assets",

      img: "https://imgs.search.brave.com/qBvxUBBoFkGjYur7wjJbIxX0AoTyBaMypP8Z1PYFWts/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE5/NjkwNjIwNC92ZWN0/b3IvY3J5cHRvY3Vy/cmVuY3ktbWVtZS1j/b2luLXRva2VuLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1q/VU5KZGt5SHlYT3V5/Qi1rdjJHcG80OEVo/Vy13OFl1N1Eyamw3/ZU1md25VPQ",
    },
  ];

  return (
    <div id="fnt-featured-section-container">
      <header id="fnt-header-group">
        <h2 id="fnt-main-title">Learn NFT</h2>
        <p id="fnt-sub-heading">Learn about NFT's , Web3, and more</p>
      </header>

      <div id="fnt-token-grid-layout">
        {tokens.map((token) => (
          <div key={token.id} className="fnt-token-card-wrapper">
            {/* Image */}
            <div className="fnt-card-media-context">
              <img
                src={token.img}
                alt=""
                className="fnt-card-background-asset"
              />
              <div className="fnt-card-overlay-gradient"></div>
            </div>

            {/* Text Section */}
            <div className="fnt-card-text-area">
              <h3 className="fnt-card-title">{token.title}</h3>

              <p className="fnt-card-desc">{token.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedTokens;
