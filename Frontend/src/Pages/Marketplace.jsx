import React, { useEffect } from "react";
import "../Style/Marketplace.css";
import { useState } from "react";
import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";

//thirdweb imports
import { createThirdwebClient, getContract, sendTransaction } from "thirdweb";
import { sepolia } from "thirdweb/chains";
// import {
//   getAllValidListings,
//   buyFromListing,
//   getAllListings,
// } from "thirdweb/extensions/marketplace";
import { useActiveAccount, ConnectButton } from "thirdweb/react";

const nftData = [
  {
    id: 1,
    title: "Cosmic Voyager",
    collection: "Space Collection",
    price: "0.45 ETH",
    usd: "$1,125.50",
    likes: "1.2K",
    author: "@stellarin",
  },
  {
    id: 2,
    title: "Golden Cyborg",
    collection: "Future Humans",
    price: "0.68 ETH",
    usd: "$1,701.35",
    likes: "857",
    author: "@cyberartz",
  },
  {
    id: 3,
    title: "Pixel Yak #4521",
    collection: "Yaks Universe",
    price: "0.23 ETH",
    usd: "$574.25",
    likes: "2.1K",
    author: "@yaksuniverse",
  },
  {
    id: 4,
    title: "Neon Skull",
    collection: "Dark Collection",
    price: "0.35 ETH",
    usd: "$876.40",
    likes: "1.5K",
    author: "@darkside",
  },
  {
    id: 5,
    title: "Cyber Girl",
    collection: "Anime Collection",
    price: "0.55 ETH",
    usd: "$1,376.85",
    likes: "965",
    author: "@animeworld",
  },
  {
    id: 6,
    title: "Voxel Land",
    collection: "Voxel Collection",
    price: "0.40 ETH",
    usd: "$999.20",
    likes: "1.1K",
    author: "@voxels",
  },
  {
    id: 7,
    title: "Abstract Dreams",
    collection: "Abstract Art",
    price: "0.30 ETH",
    usd: "$749.50",
    likes: "789",
    author: "@abstractio",
  },
  {
    id: 8,
    title: "Neon Rider",
    collection: "Cyber Collection",
    price: "0.60 ETH",
    usd: "$1,499.00",
    likes: "1.3K",
    author: "@cyberdrive",
  },
  {
    id: 9,
    title: "Bored Ape #8123",
    collection: "Bored Ape Club",
    price: "1.25 ETH",
    usd: "$3,123.45",
    likes: "2.3K",
    author: "@boredapeyc",
  },
  {
    id: 10,
    title: "Music Vibes",
    collection: "Sound Collection",
    price: "0.28 ETH",
    usd: "$699.30",
    likes: "642",
    author: "@soundwave",
  },
  {
    id: 11,
    title: "Ice Lion",
    collection: "Animals Collection",
    price: "0.49 ETH",
    usd: "$1,223.70",
    likes: "1.7K",
    author: "@wildverse",
  },
  {
    id: 12,
    title: "Fantasy Castle",
    collection: "Fantasy World",
    price: "0.33 ETH",
    usd: "$824.15",
    likes: "880",
    author: "@fantasyland",
  },
];
const client = createThirdwebClient({
  clientId: import.meta.env.VITE_MARKETPLACE_SHOP_THIRDWEB_CLIENT_ID,
});
const contract = getContract({
  client,
  chain: sepolia,
  address: import.meta.env.VITE_MARKETPLACE_SHOP_CONTRACT_ADDRESS,
});

// const FACTORY_ADDRESS =
// "0xc762F57A14F808cf7654985a07dB78f92D7aD698";

// const FACTORY_ABI = [
//   "function getAllListings() view returns(tuple(uint256 listingId,address seller,address tokenAddress,uint256 price,bool active)[])"
// ];

const FACTORY_ADDRESS = "0x0b813C6A0825EedB61967Cc72D54c2970C158719";

const FACTORY_ABI = [
  "function getAllListings() view returns((uint256 listingId,address seller,address tokenAddress,uint256 price,bool active,uint256 amount,uint256 remaining)[])",
  "function buyTokens(uint256 listingId,uint256 amount) payable",
  "function listToken(address tokenAddress,uint256 price,uint256 amount)",
  "function getUserTokens(address user) view returns(address[])",
  "function cancelListing(uint256 listingId)",
  "function updateListingPrice(uint256 listingId,uint256 newPrice)"
];

const TOKEN_ABI = [
  "function name() view returns(string)",
  "function symbol() view returns(string)",
  "function totalSupply() view returns(uint256)"
];

//starts

export default function Marketplace() {
  const account = useActiveAccount();
  const navigate = useNavigate();
  const [listings, setListings] = useState([]);
  const [tokenListings, setTokenListings] = useState([]);

 const getAllTokenListings = async () => {

  try {

    if (!window.ethereum) return;

    const provider = new ethers.BrowserProvider(window.ethereum);

    const contract = new ethers.Contract(
      FACTORY_ADDRESS,
      FACTORY_ABI,
      provider
    );

    const data = await contract.getAllListings();
    console.log("Raw Listings:", data);
    console.log("Length:", data.length);

    const listingsWithMetadata = await Promise.all(

      data.map(async (item) => {

        const tokenContract = new ethers.Contract(
        item[2],
        TOKEN_ABI,
        provider
      );

        const name = await tokenContract.name();
        const symbol = await tokenContract.symbol();
        const supply = await tokenContract.totalSupply();

        console.log("Single Listing:", item);
        console.log({
          listingId: item[0].toString(),
          seller: item[1],
          tokenAddress: item[2],
          price: item[3].toString(),
          active: item[4],
          });

        return {
            listingId: item[0],
            seller: item[1],
            tokenAddress: item[2],
            price: item[3],
            active: item[4],
            amount: item[5],
            remaining: item[6],

            name,
            symbol,
            supply: ethers.formatUnits(supply, 18),
          };

      })

    );

    console.log("Metadata Listings:", listingsWithMetadata);

    setTokenListings(listingsWithMetadata);

  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
    async function Getalllist(params) {
      const templistings = await getAllValidListings({
        contract,
        start: 0,
        count: 10,
      });
      setListings(templistings);
    }

    Getalllist();

    getAllTokenListings();

  }, []);
  console.log(listings);

  const buyToken = async (item) => {

  try {

    if (!window.ethereum) return;

    const provider = new ethers.BrowserProvider(window.ethereum);

    const signer = await provider.getSigner();

    const contract = new ethers.Contract(
      FACTORY_ADDRESS,
      FACTORY_ABI,
      signer
    );

    // Filhaal test ke liye 1 token buy karenge
    const amount = ethers.parseUnits("1", 18);

    // Price calculate
    const totalCost = item.price;

    const tx = await contract.buyTokens(
      item.listingId,
      amount,
      {
        value: totalCost,
      }
    );

    await tx.wait();

    alert("Token Purchased Successfully ✅");

    getAllTokenListings();

  } 
  // catch (error) {

  //   console.log(error);

  //   alert("Purchase Failed");

  // }

  catch (error) {
  console.log(error);
  console.log(error.reason);
  console.log(error.shortMessage);
  console.log(error.data);

  alert(
    error.shortMessage ||
    error.reason ||
    error.message
  );
}

};

  async function BuyListedNFT(nft) {
    if (!account) {
      console.log("Wallet not connected");
      return <ConnectButton client={client} />;
    }
    const listingId = nft.id;
    console.log(listingId);
    const transaction = buyFromListing({
      contract,
      listingId,
      quantity: 1n,
      recipient: account.address,
    });
    await sendTransaction({ transaction, account });
  }
  return (
    <div className="mkp-nft-container">
      {/* 2. Hero Section */}
      <header className="mkp-hero-section">
        <div className="mkp-hero-content">
          <h1 className="mkp-hero-title">
            Discover, Collect <br />& Own{" "}
            <span className="mkp-text-gradient">Extraordinary</span> <br />
            NFTs
          </h1>
          <p className="mkp-hero-subtitle">
            Explore digital art, collectibles, music, domain names and more on
            the world's best NFT marketplace.
          </p>
          <div className="mkp-hero-buttons">
            <button
              onClick={() => {
                window.location.href = "/createnft";
              }}
              className="mkp-btn-primary mkp-btn-large"
            >
              Create NFTs
            </button>
            <button
              onClick={() => {
                window.location.href = "/learnnft";
              }}
              className="mkp-btn-secondary mkp-btn-large"
            >
              How it works ⏱
            </button>
          </div>
        </div>
        <div className="mkp-hero-image-wrapper">
          <div className="mkp-hero-glow"></div>
          <img
            src="/Display.png"
            alt="Featured Ape NFT"
            className="mkp-hero-img"
          />
        </div>
      </header>

      {/* 3. Banner */}
      <section
        className="mkp-list-nft-banner"
        onClick={() => navigate("/createnft#scroll-here")}
      >
        <div className="mkp-banner-left">
          <div className="mkp-banner-icon">＋</div>
          <div>
            <h3 className="mkp-banner-title">List Your NFT</h3>
            <p className="mkp-banner-desc">
              List your NFT collection and start earning now.
            </p>
          </div>
        </div>
        <button className="mkp-btn-primary mkp-btn-banner">List NFT</button>
      </section>
      <div className="mkp-wallet-connect-button">
        <ConnectButton className="mkp-wallet-connect-button" client={client} />
      </div>
<section>

<h2>🔥 Listed Tokens</h2>

<div className="listed-token-container">

{
tokenListings.map((item, index) => (

<div
  key={item.listingId}
  className="listed-token-card"
>

  <div className="listed-token-left">

    <div className="token-symbol-circle">

      {item.symbol}

    </div>

    <div>

      <h3>{item.name}</h3>

      <p>

        Supply : {item.supply}

      </p>

    </div>

  </div>

  <div className="listed-token-right">

  <h3>{ethers.formatEther(item.price)} ETH</h3>

    <button
  className="buy-token-btn"
  onClick={() => buyToken(item)}
>
  BUY
</button>

  </div>

</div>

))
}

</div>

</section>

      {/* 4. Trending Section */}
      <section className="mkp-trending-section">
        <div className="mkp-trending-header">
          <h2 className="mkp-section-title">Trending NFTs 🔥</h2>
          <div className="mkp-filter-wrapper"></div>
        </div>

        {/* NFT Grid */}
        <div className="mkp-nft-grid">
          {listings.map((nft) => (
            <div key={nft.id} className="mkp-nft-card">
              <div className="mkp-card-image-box">
                <img
                  className="mkp-card-img"
                  src={nft?.asset?.metadata?.image?.replace(
                    "ipfs://",
                    "https://ipfs.io/ipfs/",
                  )}
                  // src="https://imgs.search.brave.com/cxK8yYoMfgHkWGAMV5994P1TJD_KjjJr1flcmxioz00/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy93b21hbi13aXRo/LXN1bi1nbGFzc2Vz/LWluLWZsb3dlci1m/aWVsZC1zdW1tZXIt/ZnJlZS1waG90by5q/cGc_dz02MDAmcXVh/bGl0eT04MA"
                  alt={nft?.asset?.metadata?.image?.replace(
                    "ipfs://",
                    "https://ipfs.io/ipfs/",
                  )}
                />
                <span className="mkp-like-badge">❤️ {nft.likes}</span>
              </div>
              {nft.tokenId}
              <div className="mkp-card-details">
                <div className="mkp-card-info-row">
                  <div>
                    <h4 className="mkp-card-title">
                      {nft.asset.metadata.name}
                    </h4>
                    <p className="mkp-card-collection">{nft.collection}</p>
                  </div>
                  <div className="mkp-card-price-box">
                    <p className="mkp-card-eth">
                      {nft.currencyValuePerToken.displayValue +
                        " " +
                        nft.currencyValuePerToken.symbol}
                    </p>
                    <p className="mkp-card-usd">{nft.usd}</p>
                  </div>
                </div>
                <div className="mkp-card-author-row">
                  <div className="mkp-author-avatar">
                    <img src="https://via.placeholder.com/50" alt="avatar" />
                  </div>
                  <span className="mkp-author-name">
                    {nft.currencyValuePerToken.name}
                  </span>
                  <span className="mkp-verified-tick">✓</span>
                  <button
                    className="mkp-nft-card-buybutton"
                    onClick={() => {
                      BuyListedNFT(nft);
                    }}
                  >
                    BUY
                  </button>
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
