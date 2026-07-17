import "../Style/Learnnft.css";

export default function MintoraNFTLearn() {
  return (
    <div className="mintoraLearnMainWrapper">

      <div className="mintoraLearnContainer">

        <h1 className="mintoraLearnMainHeading">
          What is an NFT?
        </h1>

        <p className="mintoraLearnIntroText">
          NFTs (Non-Fungible Tokens) are unique digital assets stored on a
          blockchain. They prove ownership of digital items like images,
          music, videos, game assets, and collectibles.
        </p>


        <div className="mintoraLearnImageBox">
          <img
            src="/WhatisanNFT.png"
            alt="NFT concept"
          />
        </div>


        <h2 className="mintoraLearnSectionHeading">
          Fungible vs Non-Fungible
        </h2>

        <p className="mintoraLearnParagraph">
          Fungible assets like money can be exchanged with identical value.
          But NFTs are unique. Each NFT has its own identity and cannot be
          replaced by another.
        </p>


        <div className="mintoraLearnImageBox">
          <img
            src="FungiblevsnonFungible.png"
            alt="Fungible vs Non fungible"
          />
        </div>


        <h2 className="mintoraLearnSectionHeading">
          How NFTs Work
        </h2>

        <p className="mintoraLearnParagraph">
          NFTs work on blockchain technology. When someone creates, buys,
          or sells an NFT, the transaction is permanently recorded on a
          decentralized ledger. This ensures authenticity and ownership.
        </p>


        <div className="mintoraLearnImageBox">
          <img
            src="hownftworks.png"
            alt="Blockchain NFT working"
          />
        </div>


        <h2 className="mintoraLearnSectionHeading">
          Where NFTs Are Used
        </h2>

        <p className="mintoraLearnParagraph">
          NFTs are commonly used in digital art, gaming assets, music rights,
          event tickets, metaverse land, and profile picture collections.
          They allow creators to sell their work directly to collectors.
        </p>


        <div className="mintoraLearnImageBox">
          <img
            src="nftusecase.png"
            alt="NFT use cases"
          />
        </div>


        <h2 className="mintoraLearnSectionHeading">
          Why NFTs Matter
        </h2>

        <p className="mintoraLearnParagraph">
          NFTs make digital ownership real. Artists can earn royalties,
          gamers can own in-game assets, and collectors can verify
          authenticity easily using blockchain records.
        </p>
        <div className="mintoraLearnImageBox">
          <img
            src="whynftmatters.png"
            alt="NFT use cases"
          />
        </div>

      </div>
    </div>
  );
}