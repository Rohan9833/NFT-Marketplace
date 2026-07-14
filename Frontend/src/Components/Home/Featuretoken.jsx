import React, { useState, useEffect } from "react";
import "../../Style/FeaturedTokens.css";
import { getNFTs } from "thirdweb/extensions/erc721";
import { createThirdwebClient, getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";

const client = createThirdwebClient({
  clientId: import.meta.env.VITE_THIRDWEB_CLIENT_ID,
});

const contract = getContract({
  client,
  chain: sepolia,
  address: import.meta.env.VITE_CONTRACT_ADDRESS,
});
const FeaturedTokens = () => {
  const tokens = [
    {
      id: 1,
      name: "Pippin",
      symbol: "pippin",
      fdv: "$29M",
      change: "-10.6%",
      type: "negative",
      img: "https://imgs.search.brave.com/qBvxUBBoFkGjYur7wjJbIxX0AoTyBaMypP8Z1PYFWts/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE5/NjkwNjIwNC92ZWN0/b3IvY3J5cHRvY3Vy/cmVuY3ktbWVtZS1j/b2luLXRva2VuLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1q/VU5KZGt5SHlYT3V5/Qi1rdjJHcG80OEVo/Vy13OFl1N1Eyamw3/ZU1md25VPQ",
    },
    {
      id: 2,
      name: "Limitless Official Token",
      symbol: "LMTS",
      fdv: "$115M",
      change: "+3.9%",
      type: "positive",
      verified: true,
      img: "https://imgs.search.brave.com/qBvxUBBoFkGjYur7wjJbIxX0AoTyBaMypP8Z1PYFWts/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE5/NjkwNjIwNC92ZWN0/b3IvY3J5cHRvY3Vy/cmVuY3ktbWVtZS1j/b2luLXRva2VuLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1q/VU5KZGt5SHlYT3V5/Qi1rdjJHcG80OEVo/Vy13OFl1N1Eyamw3/ZU1md25VPQ",
    },
    {
      id: 3,
      name: "Moonbirds",
      symbol: "BIRB",
      fdv: "$137.2M",
      change: "+2.9%",
      type: "positive",
      verified: true,
      img: "https://imgs.search.brave.com/qBvxUBBoFkGjYur7wjJbIxX0AoTyBaMypP8Z1PYFWts/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE5/NjkwNjIwNC92ZWN0/b3IvY3J5cHRvY3Vy/cmVuY3ktbWVtZS1j/b2luLXRva2VuLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1q/VU5KZGt5SHlYT3V5/Qi1rdjJHcG80OEVo/Vy13OFl1N1Eyamw3/ZU1md25VPQ",
    },
    {
      id: 4,
      name: "Seamless",
      symbol: "SEAM",
      fdv: "$6.5M",
      change: "-7.8%",
      type: "negative",
      verified: true,
      img: "https://imgs.search.brave.com/qBvxUBBoFkGjYur7wjJbIxX0AoTyBaMypP8Z1PYFWts/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE5/NjkwNjIwNC92ZWN0/b3IvY3J5cHRvY3Vy/cmVuY3ktbWVtZS1j/b2luLXRva2VuLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1q/VU5KZGt5SHlYT3V5/Qi1rdjJHcG80OEVo/Vy13OFl1N1Eyamw3/ZU1md25VPQ",
    },
    {
      id: 9,
      name: "Limitless Official Token",
      symbol: "LMTS",
      fdv: "$115M",
      change: "+3.9%",
      type: "positive",
      verified: true,
      img: "https://imgs.search.brave.com/qBvxUBBoFkGjYur7wjJbIxX0AoTyBaMypP8Z1PYFWts/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE5/NjkwNjIwNC92ZWN0/b3IvY3J5cHRvY3Vy/cmVuY3ktbWVtZS1j/b2luLXRva2VuLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1q/VU5KZGt5SHlYT3V5/Qi1rdjJHcG80OEVo/Vy13OFl1N1Eyamw3/ZU1md25VPQ",
    },
    {
      id: 11,
      name: "Moonbirds",
      symbol: "BIRB",
      fdv: "$137.2M",
      change: "+2.9%",
      type: "positive",
      verified: true,
      img: "https://imgs.search.brave.com/qBvxUBBoFkGjYur7wjJbIxX0AoTyBaMypP8Z1PYFWts/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE5/NjkwNjIwNC92ZWN0/b3IvY3J5cHRvY3Vy/cmVuY3ktbWVtZS1j/b2luLXRva2VuLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1q/VU5KZGt5SHlYT3V5/Qi1rdjJHcG80OEVo/Vy13OFl1N1Eyamw3/ZU1md25VPQ",
    },
    {
      id: 41,
      name: "Seamless",
      symbol: "SEAM",
      fdv: "$6.5M",
      change: "-7.8%",
      type: "negative",
      verified: true,
      img: "https://imgs.search.brave.com/qBvxUBBoFkGjYur7wjJbIxX0AoTyBaMypP8Z1PYFWts/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE5/NjkwNjIwNC92ZWN0/b3IvY3J5cHRvY3Vy/cmVuY3ktbWVtZS1j/b2luLXRva2VuLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1q/VU5KZGt5SHlYT3V5/Qi1rdjJHcG80OEVo/Vy13OFl1N1Eyamw3/ZU1md25VPQ",
    },
    {
      id: 42,
      name: "Limitless Official Token",
      symbol: "LMTS",
      fdv: "$115M",
      change: "+3.9%",
      type: "positive",
      verified: true,
      img: "https://imgs.search.brave.com/qBvxUBBoFkGjYur7wjJbIxX0AoTyBaMypP8Z1PYFWts/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE5/NjkwNjIwNC92ZWN0/b3IvY3J5cHRvY3Vy/cmVuY3ktbWVtZS1j/b2luLXRva2VuLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1q/VU5KZGt5SHlYT3V5/Qi1rdjJHcG80OEVo/Vy13OFl1N1Eyamw3/ZU1md25VPQ",
    },
    {
      id: 37,
      name: "Moonbirds",
      symbol: "BIRB",
      fdv: "$137.2M",
      change: "+2.9%",
      type: "positive",
      verified: true,
      img: "https://imgs.search.brave.com/qBvxUBBoFkGjYur7wjJbIxX0AoTyBaMypP8Z1PYFWts/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE5/NjkwNjIwNC92ZWN0/b3IvY3J5cHRvY3Vy/cmVuY3ktbWVtZS1j/b2luLXRva2VuLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1q/VU5KZGt5SHlYT3V5/Qi1rdjJHcG80OEVo/Vy13OFl1N1Eyamw3/ZU1md25VPQ",
    },
    {
      id: 412,
      name: "Seamless",
      symbol: "SEAM",
      fdv: "$6.5M",
      change: "-7.8%",
      type: "negative",
      verified: true,
      img: "https://imgs.search.brave.com/qBvxUBBoFkGjYur7wjJbIxX0AoTyBaMypP8Z1PYFWts/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE5/NjkwNjIwNC92ZWN0/b3IvY3J5cHRvY3Vy/cmVuY3ktbWVtZS1j/b2luLXRva2VuLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1q/VU5KZGt5SHlYT3V5/Qi1rdjJHcG80OEVo/Vy13OFl1N1Eyamw3/ZU1md25VPQ",
    },
    {
      id: 52,
      name: "Sport.fun",
      symbol: "FUN",
      fdv: "$37.3M",
      change: "+7.6%",
      type: "positive",
      verified: true,
      img: "https://imgs.search.brave.com/qBvxUBBoFkGjYur7wjJbIxX0AoTyBaMypP8Z1PYFWts/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE5/NjkwNjIwNC92ZWN0/b3IvY3J5cHRvY3Vy/cmVuY3ktbWVtZS1j/b2luLXRva2VuLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1q/VU5KZGt5SHlYT3V5/Qi1rdjJHcG80OEVo/Vy13OFl1N1Eyamw3/ZU1md25VPQ",
    },
  ];
  const [nfts, setNfts] = useState([]);
  useEffect(() => {
    async function GetNFTS() {
      const data = await getNFTs({
        contract,
      });
      setNfts(data);
      console.log(data);
    }
    GetNFTS();
  }, []);

  return (
    <div id="fnt-featured-section-container">
      <header id="fnt-header-group">
        <h2 id="fnt-main-title">Featured Tokens</h2>
        <p id="fnt-sub-heading">This week's curated tokens</p>
      </header>

      <div id="fnt-token-grid-layout">
        {nfts
          ?.slice()
          .reverse()
          .map((nft) => (
            <div key={nft.id.toString()} className="fnt-token-card-wrapper">
              <div className="fnt-card-media-context">
                <img
                  src={
                    nft?.metadata?.image?.replace(
                      "ipfs://",
                      "https://ipfs.io/ipfs/",
                    ) || ""
                  }
                  alt={nft?.metadata?.name}
                  className="fnt-card-background-asset"
                />

                <div className="fnt-card-overlay-gradient"></div>
              </div>

              <div className="fnt-card-content-footer">
                <div className="fnt-identity-row">
                  <div className="fnt-avatar-container">
                    <img
                      src={
                        nft?.metadata?.image?.replace(
                          "ipfs://",
                          "https://ipfs.io/ipfs/",
                        ) || ""
                      }
                      alt={nft?.metadata?.name}
                      className="fnt-token-icon-small"
                    />
                  </div>

                  <div className="fnt-label-stack">
                    <span className="fnt-token-display-name">
                      {nft?.metadata?.name}
                    </span>
                  </div>
                </div>

                <div className="fnt-metric-row">
                  <span className="fnt-fdv-label">
                    Token #{nft.id.toString()}
                  </span>

                  <span className="fnt-percent-change fnt-state-up">
                    ERC721
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
