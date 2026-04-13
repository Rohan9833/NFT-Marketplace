import React from "react";
import "../Style/About.css";

const About = () => {
  return (
    <div className="aboutPageWrapper">

      {/* HERO SECTION */}

      <section className="aboutPageHeroContainer">

        <div className="aboutPageHeroLeftSide">

          <h1 className="aboutPageHeroHeading">
            About Our NFT <br /> Marketplace
          </h1>

          <p className="aboutPageHeroDescription">
            Discover, collect and trade unique digital assets securely on our
            decentralized NFT marketplace powered by blockchain technology.
          </p>

          <button className="aboutPageExploreButton">
            Explore Marketplace
          </button>

        </div>


        {/* RIGHT STATS */}

        <div className="aboutPageStatsContainer">

          <div className="aboutPageStatCard">
            <div className="aboutPageStatNumber">10K+</div>
            <div className="aboutPageStatLabel">NFTs Minted</div>
          </div>

          <div className="aboutPageStatCard">
            <div className="aboutPageStatNumber">5K+</div>
            <div className="aboutPageStatLabel">Active Users</div>
          </div>

          <div className="aboutPageStatCard">
            <div className="aboutPageStatNumber">120+</div>
            <div className="aboutPageStatLabel">Verified Creators</div>
          </div>

        </div>

      </section>


      {/* FEATURES */}

      <section className="aboutPageFeatureGrid">

        <div className="aboutPageFeatureCard">
          <div className="aboutPageFeatureTitle">Secure Blockchain</div>
          <div className="aboutPageFeatureText">
            All assets protected using audited smart contracts.
          </div>
        </div>

        <div className="aboutPageFeatureCard">
          <div className="aboutPageFeatureTitle">Low Gas Fees</div>
          <div className="aboutPageFeatureText">
            Optimized minting reduces transaction cost.
          </div>
        </div>

        <div className="aboutPageFeatureCard">
          <div className="aboutPageFeatureTitle">Creator Friendly</div>
          <div className="aboutPageFeatureText">
            Launch collections easily with intuitive tools.
          </div>
        </div>

        <div className="aboutPageFeatureCard">
          <div className="aboutPageFeatureTitle">Fast Transactions</div>
          <div className="aboutPageFeatureText">
            Lightning-fast NFT transfers and marketplace speed.
          </div>
        </div>

      </section>


      {/* STACK */}

      <section className="aboutPageStackSection">

        <div className="aboutPageStackHeading">
          Built With Modern Web3 Stack
        </div>

        <div className="aboutPageStackTags">

          <span className="aboutPageStackTag">Ethereum</span>
          <span className="aboutPageStackTag">IPFS</span>
          <span className="aboutPageStackTag">Solidity</span>
          <span className="aboutPageStackTag">React</span>
          <span className="aboutPageStackTag">Node.js</span>

        </div>

      </section>


      {/* CTA */}

      <section className="aboutPageCtaContainer">

        <div className="aboutPageCtaHeading">
          Start Creating & Collecting NFTs Today
        </div>

        <button className="aboutPageWalletButton">
          Connect Wallet
        </button>

      </section>

    </div>
  );
};

export default About;