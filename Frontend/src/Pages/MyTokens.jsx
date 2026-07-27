import { useEffect, useState } from "react";
import { ethers } from "ethers";
// import "../Style/MyTokens.css";

const FACTORY_ADDRESS =
  "0xc762F57A14F808cf7654985a07dB78f92D7aD698";

const FACTORY_ABI = [
  "function getUserTokens(address user) view returns(address[] memory)"
];

function MyTokens() {

  const [tokens, setTokens] = useState([]);

  useEffect(() => {

    getUserTokens();

  }, []);

  const getUserTokens = async () => {

    try {

      if (!window.ethereum) {
        alert("Please Install MetaMask");
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);

      const signer = await provider.getSigner();

      const walletAddress = await signer.getAddress();

      const contract = new ethers.Contract(
        FACTORY_ADDRESS,
        FACTORY_ABI,
        provider
      );

      const userTokens = await contract.getUserTokens(walletAddress);

      console.log(userTokens);

      setTokens(userTokens);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div>

      <h1>My Tokens</h1>

      {
        tokens.map((token,index)=>{

          return(

            <div key={index}>

              <p>{token}</p>

            </div>

          )

        })
      }

    </div>

  );

}

export default MyTokens;