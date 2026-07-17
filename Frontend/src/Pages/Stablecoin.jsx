import "../Style/Learnnft.css";

export default function GasFeeLearn() {
  return (
    <div className="mintoraLearnMainWrapper">
      <div className="mintoraLearnContainer">
        <h1 className="mintoraLearnMainHeading">What are Stable coin??</h1>

        <p className="mintoraLearnIntroText">
          Stablecoins are cryptocurrencies designed to maintain a stable value
          by being linked to assets such as the US Dollar, Euro, or gold. Unlike
          Bitcoin or Ethereum, which can experience large price fluctuations,
          stablecoins provide a more predictable value, making them useful for
          payments, trading, and storing digital assets.
        </p>

        <div className="mintoraLearnImageBox">
          <img src="stablecoin.png" alt="NFT concept" />
        </div>

        <h2 className="mintoraLearnSectionHeading">Stable coin Concept</h2>

        <p className="mintoraLearnParagraph">
          A stablecoin combines the speed and security of blockchain technology
          with the stability of traditional financial assets. Most stablecoins
          are backed by reserves like cash or government securities, while some
          use algorithms or crypto collateral to maintain their value.
        </p>

        <div className="mintoraLearnImageBox">
          <img src="stablecoinconcept.png" alt="Fungible vs Non fungible" />
        </div>

        <h2 className="mintoraLearnSectionHeading">How Stable coin Work</h2>

        <p className="mintoraLearnParagraph">
          Stablecoins maintain their value through different mechanisms.
          Fiat-backed stablecoins hold reserves equal to the tokens issued,
          while crypto-backed and algorithmic stablecoins use smart contracts
          and collateral systems to keep the price close to their target value.
        </p>

        <div className="mintoraLearnImageBox">
          <img src="howstablecoinworks.png" alt="Blockchain NFT working" />
        </div>

        <h2 className="mintoraLearnSectionHeading">
          Where Stable coin Are Used
        </h2>

        <p className="mintoraLearnParagraph">
          Stablecoins are widely used for cryptocurrency trading, cross-border
          payments, decentralized finance (DeFi), online purchases, remittances,
          and digital savings. They allow users to transfer value quickly
          without worrying about major price volatility.
        </p>

        <div className="mintoraLearnImageBox">
          <img src="gasfeesusecase.png" alt="NFT use cases" />
        </div>

        <h2 className="mintoraLearnSectionHeading">Why Stable coin Matter</h2>

        <p className="mintoraLearnParagraph">
          Stablecoins make digital payments more reliable by reducing the price
          volatility common in cryptocurrencies. They help bridge traditional
          finance and blockchain technology, enabling faster transactions, lower
          transfer costs, and easier access to global financial services.
        </p>
        <div className="mintoraLearnImageBox">
          <img src="whysstablecoinmatters.png" alt="NFT use cases" />
        </div>
      </div>
    </div>
  );
}
