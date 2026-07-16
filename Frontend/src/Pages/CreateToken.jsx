import { useState } from "react";
import { ethers } from "ethers";
import "../Style/CreateToken.css"

const FACTORY_ADDRESS =
  "0x67fB0aaE57dD8516785Da29DB3A394EA2F281Cbe";

const FACTORY_ABI = [
  "function createToken(string _name,string _symbol,uint256 _supply) public returns(address)"
];

function CreateToken() {
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [supply, setSupply] = useState("");

  const createToken = async () => {
    try {
      if (!window.ethereum) {
        alert("Metamask not found");
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);

      const signer = await provider.getSigner();

      const contract = new ethers.Contract(
        FACTORY_ADDRESS,
        FACTORY_ABI,
        signer
      );

      const tx = await contract.createToken(
        name,
        symbol,
        supply
      );

      alert("Transaction Submitted");

      await tx.wait();

      alert("Token Created Successfully");
    } catch (error) {
      console.log(error);
      alert(error.reason || error.message);
    }
  };

  return (
  <div className="create-token-page">
    <div className="create-token-card">

      <h1 className="create-token-title">
        Create Token
      </h1>

      <p className="create-token-subtitle">
        Deploy your own ERC-20 token on the Sepolia network
        and manage ownership directly from your wallet.
      </p>

      <div className="form-group">
        <label>Token Name</label>
        <input
          type="text"
          placeholder="Example: Mintora Token"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Token Symbol</label>
        <input
          type="text"
          placeholder="Example: MTA"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Total Supply</label>
        <input
          type="number"
          placeholder="Example: 1000000"
          value={supply}
          onChange={(e) => setSupply(e.target.value)}
        />
      </div>

      <button
        className="create-token-btn"
        onClick={createToken}
      >
        Create Token
      </button>

    </div>
  </div>
);
}

export default CreateToken;