import React from "react";
import "../../Style/Learn.css";
import NFT from "../../assets/images/NFTImg.webp";
import SC from "../../assets/images/SCImg.webp";
import NFTGas from "../../assets/images/NFTGasfee.webp";
import mintnft from "../../assets/images/MintNFT.webp";
import Stablecoin from "../../assets/images/Stablecoin.webp";

const FeaturedTokens = () => {

    function ArticlePage(id){
        console.log(id);

        switch(id){
            case 1:
                window.location.href = "/learnnft"
                break;
            case 2:
                window.location.href = "/learnsmartcontract"
                break;
            case 3:
                window.location.href = "/learngasfee"
                break;
            case 4:
                window.location.href = "/learnmintingnft"
                break;
            case 5:
                window.location.href = "/learnnft"
                break;

        }
    }



  const tokens = [
    {
      id: 1,
      title: "What is NFT",
      desc: "Digital ownership explained",
      img: NFT,
    },
    {
      id: 2,
      title: "Smart Contracts",
      desc: "Automated blockchain logic",

      img: SC,
    },
    {
      id: 3,
      title: "Gas Fees",
      desc: "Transaction cost basics",

      img: NFTGas,
    },
    {
      id: 4,
      title: "Minting NFT",
      desc: "Create blockchain assets",

      img: mintnft,
    },
    {
      id: 5,
      title: "What is NFT",
      desc: "Digital ownership explained",
      img: Stablecoin,
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
          <div onClick={()=>{ArticlePage(token.id)}} key={token.id} className="fnt-token-card-wrapper">
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
