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
            src="whatissmartcontract.png"
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
            src="smartcontractconcept.png"
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
            src="howsmartcontractworks.png"
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
            src="smartcontractusecase.png"
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
        <div className="mintoraLearnImageBox">
          <img
            src="whysmartcontractmatters.png"
            alt="NFT use cases"
          />
        </div>
      </div>
    </div>
  );
}
