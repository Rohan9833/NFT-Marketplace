import { useState } from "react";
import { ethers } from "ethers";

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
    <div style={{ padding: "30px" }}>
      <h1>Create Token</h1>

      <input
        type="text"
        placeholder="Token Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Token Symbol"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Supply"
        value={supply}
        onChange={(e) => setSupply(e.target.value)}
      />

      <br />
      <br />

      <button onClick={createToken}>
        Create Token
      </button>
    </div>
  );
}

export default CreateToken;