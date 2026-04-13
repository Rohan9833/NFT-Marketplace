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
            src="https://miro.medium.com/v2/resize:fit:1200/1*4nX1cP5E8cM6d4Qh0S6b6Q.png"
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
            src="https://miro.medium.com/v2/resize:fit:1400/1*JxQ2sJHqkRkNvztNFVQVwA.png"
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
            src="https://miro.medium.com/v2/resize:fit:1200/1*vXj5QJ6N0iR8e2wX1QxkYg.png"
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
            src="https://miro.medium.com/v2/resize:fit:1200/1*QvXr8mQ6u7Y8G2dT6G7k7A.png"
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

      </div>
    </div>
  );
}