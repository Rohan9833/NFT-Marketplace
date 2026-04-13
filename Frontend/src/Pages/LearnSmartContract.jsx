import "../Style/Learnnft.css";

export default function SmartContractLearn() {
  return (
    <div className="mintoraLearnMainWrapper">
      <div className="mintoraLearnContainer">
        <h1 className="mintoraLearnMainHeading">What is a Smart Contract?</h1>

        <p className="mintoraLearnIntroText">
          Smart Contracts are self-executing programs stored on a blockchain.
          They automatically perform actions when predefined conditions are met,
          without needing a middleman.
        </p>

        <div className="mintoraLearnImageBox">
          <img
            src="https://miro.medium.com/v2/resize:fit:1200/1*4nX1cP5E8cM6d4Qh0S6b6Q.png"
            alt="NFT concept"
          />
        </div>

        <h2 className="mintoraLearnSectionHeading">Smart Contract Concept</h2>

        <p className="mintoraLearnParagraph">
          Traditional Contracts vs Smart Contracts Traditional contracts require
          intermediaries like lawyers or banks to enforce agreements. But Smart
          Contracts run automatically on blockchain networks, reducing delays,
          costs, and human errors.
        </p>

        <div className="mintoraLearnImageBox">
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/1*JxQ2sJHqkRkNvztNFVQVwA.png"
            alt="Fungible vs Non fungible"
          />
        </div>

        <h2 className="mintoraLearnSectionHeading">How Smart Contracts Work</h2>

        <p className="mintoraLearnParagraph">
          Smart Contracts work using blockchain technology. Developers write
          code that defines rules and conditions. When those conditions are
          satisfied, the contract automatically executes the action — such as
          transferring funds, minting NFTs, or granting access. All transactions
          are recorded permanently on the blockchain, ensuring transparency and
          trust.
        </p>

        <div className="mintoraLearnImageBox">
          <img
            src="https://miro.medium.com/v2/resize:fit:1200/1*vXj5QJ6N0iR8e2wX1QxkYg.png"
            alt="Blockchain NFT working"
          />
        </div>

        <h2 className="mintoraLearnSectionHeading">
          Where Smart Contracts Are Used
        </h2>

        <p className="mintoraLearnParagraph">
          Smart Contracts are widely used in NFT marketplaces, cryptocurrency
          transactions, decentralized finance (DeFi), gaming systems, voting
          systems, supply chain tracking, and digital identity verification.
          They help automate processes that normally require manual approval.
        </p>

        <div className="mintoraLearnImageBox">
          <img
            src="https://miro.medium.com/v2/resize:fit:1200/1*QvXr8mQ6u7Y8G2dT6G7k7A.png"
            alt="NFT use cases"
          />
        </div>

        <h2 className="mintoraLearnSectionHeading">
          Why Smart Contracts Matter
        </h2>

        <p className="mintoraLearnParagraph">
          Smart Contracts make transactions secure, transparent, and automated.
          They remove intermediaries, reduce costs, prevent fraud, and ensure
          that agreements are executed exactly as programmed.
        </p>
      </div>
    </div>
  );
}
