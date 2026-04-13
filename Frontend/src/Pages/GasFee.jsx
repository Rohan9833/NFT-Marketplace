import "../Style/Learnnft.css";

export default function GasFeeLearn() {
  return (
    <div className="mintoraLearnMainWrapper">
      <div className="mintoraLearnContainer">
        <h1 className="mintoraLearnMainHeading">What are Gas Fees??</h1>

        <p className="mintoraLearnIntroText">
          Gas Fees are transaction charges paid to process and validate actions
          on a blockchain. They are required when sending cryptocurrency,
          minting NFTs, or executing smart contracts.
        </p>

        <div className="mintoraLearnImageBox">
          <img
            src="https://miro.medium.com/v2/resize:fit:1200/1*4nX1cP5E8cM6d4Qh0S6b6Q.png"
            alt="NFT concept"
          />
        </div>

        <h2 className="mintoraLearnSectionHeading">Gas Fees Concept</h2>

        <p className="mintoraLearnParagraph">
          Why Gas Fees Exist Gas fees are paid to blockchain validators or
          miners who process transactions and keep the network secure. Without
          gas fees, the blockchain would not function properly because no one
          would have an incentive to verify transactions.
        </p>

        <div className="mintoraLearnImageBox">
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/1*JxQ2sJHqkRkNvztNFVQVwA.png"
            alt="Fungible vs Non fungible"
          />
        </div>

        <h2 className="mintoraLearnSectionHeading">How Gas Fees Work</h2>

        <p className="mintoraLearnParagraph">
          Gas fees work based on the computational power required to perform an
          action on the blockchain. When a user sends crypto, mints an NFT, or
          interacts with a smart contract, they pay a small fee. The more
          complex the transaction, the higher the gas fee. Gas fees can also
          change depending on network traffic — when many users are active, fees
          usually increase.
        </p>

        <div className="mintoraLearnImageBox">
          <img
            src="https://miro.medium.com/v2/resize:fit:1200/1*vXj5QJ6N0iR8e2wX1QxkYg.png"
            alt="Blockchain NFT working"
          />
        </div>

        <h2 className="mintoraLearnSectionHeading">Where Gas Fees Are Used</h2>

        <p className="mintoraLearnParagraph">
          Gas fees are required in many blockchain activities such as
          cryptocurrency transfers, NFT minting, NFT buying and selling, smart
          contract execution, decentralized finance (DeFi) transactions, and
          token swaps. Every action that interacts with the blockchain typically
          requires gas fees.
        </p>

        <div className="mintoraLearnImageBox">
          <img
            src="https://miro.medium.com/v2/resize:fit:1200/1*QvXr8mQ6u7Y8G2dT6G7k7A.png"
            alt="NFT use cases"
          />
        </div>

        <h2 className="mintoraLearnSectionHeading">Why Gas Fees Matter</h2>

        <p className="mintoraLearnParagraph">
          Gas fees help keep blockchain networks secure, functional, and
          efficient. They prevent spam transactions, reward validators, and
          ensure that blockchain operations are processed reliably.
        </p>
      </div>
    </div>
  );
}
