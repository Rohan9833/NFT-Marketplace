import { useEffect, useState } from "react";
import { ethers } from "ethers";
import "../Style/CreateToken.css";

const FACTORY_ADDRESS =
  // "0xc762F57A14F808cf7654985a07dB78f92D7aD698";
  "0x0b813C6A0825EedB61967Cc72D54c2970C158719";

const FACTORY_ABI = [
  "function createToken(string,string,uint256) returns(address)",
  "function getUserTokens(address) view returns(address[])",
  "function listToken(address,uint256,uint256)",
];

const TOKEN_ABI = [
  "function approve(address spender,uint256 amount) returns(bool)",
];

function CreateToken() {
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [supply, setSupply] = useState("");
  const [tokens, setTokens] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedToken, setSelectedToken] = useState("");
  const [price, setPrice] = useState("");
  const [sellAmount, setSellAmount] = useState("");

  useEffect(() => {
    getUserTokens();
  }, []);

  const getUserTokens = async () => {
    try {
      if (!window.ethereum) return;

      const provider = new ethers.BrowserProvider(window.ethereum);

      const signer = await provider.getSigner();

      const walletAddress = await signer.getAddress();

      const contract = new ethers.Contract(
        FACTORY_ADDRESS,
        FACTORY_ABI,
        provider,
      );

      const userTokens = await contract.getUserTokens(walletAddress);

      setTokens(userTokens);
    } catch (error) {
      console.log(error);
    }
  };

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
        signer,
      );

      const tx = await contract.createToken(name, symbol, supply);

      alert("Transaction Submitted");

      await tx.wait();

      await getUserTokens();

      alert("Token Created Successfully");

      setName("");
      setSymbol("");
      setSupply("");
    } catch (error) {
      console.log(error);

      alert(error.reason || error.message);
    }
  };

  const openSellPopup = (tokenAddress) => {
    setSelectedToken(tokenAddress);

    setShowPopup(true);
  };

  const closeSellPopup = () => {
    setShowPopup(false);

    setSelectedToken("");

    setPrice("");
  };

  const listToken = async () => {
    try {
      if (!window.ethereum) return;

      const provider = new ethers.BrowserProvider(window.ethereum);

      const signer = await provider.getSigner();

      const contract = new ethers.Contract(
        FACTORY_ADDRESS,
        FACTORY_ABI,
        signer,
      );

      const tokenContract = new ethers.Contract(
        selectedToken,
        TOKEN_ABI,
        signer,
      );

      const amount = ethers.parseUnits(sellAmount, 18);

      const approveTx = await tokenContract.approve(FACTORY_ADDRESS, amount);

      await approveTx.wait();

      const tx = await contract.listToken(
        selectedToken,
        ethers.parseEther(price),
        amount,
      );

      await tx.wait();

      alert("Token Listed Successfully");

      closeSellPopup();
    } catch (error) {
      // catch (error) {

      //   console.log(error);

      //   alert(error.reason || error.message);

      // }
      console.log(error);
      console.log(error.reason);
      console.log(error.shortMessage);
      console.log(error.data);

      alert(error.shortMessage || error.reason || error.message);
    }
  };

  return (
    <div className="create-token-page">
      <div className="create-token-card">
        <h1 className="create-token-title">Create Token</h1>

        <p className="create-token-subtitle">
          Deploy your own ERC-20 token on the Sepolia network and manage
          ownership directly from your wallet.
        </p>

        <div className="form-group">
          <label>Token Name</label>

          <input
            type="text"
            placeholder="Example : Mintora Token"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Token Symbol</label>

          <input
            type="text"
            placeholder="Example : MTA"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Total Supply</label>

          <input
            type="number"
            placeholder="Example : 1000000"
            value={supply}
            onChange={(e) => setSupply(e.target.value)}
          />
        </div>

        <button className="create-token-btn" onClick={createToken}>
          Create Token
        </button>

        <div
          style={{
            marginTop: "50px",
          }}
        >
          <h2>My Tokens</h2>

          <hr />

          {tokens.length === 0 && <p>No Tokens Found</p>}

          {tokens.map((token, index) => (
            <div key={index} className="my-token-card">
              <div>
                <h3>Token #{index + 1}</h3>

                <p>{token}</p>
              </div>

              <button
                className="create-token-btn"
                onClick={() => openSellPopup(token)}
              >
                Sell
              </button>
            </div>
          ))}
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-card">
            <h2>Sell Token</h2>

            <p>
              <b>Token Address</b>
            </p>

            <p>{selectedToken}</p>

            <input
              type="number"
              placeholder="Enter Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <input
              type="number"
              placeholder="Total tokens"
              value={sellAmount}
              onChange={(e) => setSellAmount(e.target.value)}
            />

            <div className="popup-buttons">
              <button onClick={closeSellPopup}>Cancel</button>

              <button onClick={listToken}>List Token</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateToken;
