const { pinataUpload } = require("../service/IPFS.service.js");

const { lazyMint } = require("thirdweb/extensions/erc721");
const { sendTransaction } = require("thirdweb");
const { createThirdwebClient, getContract } = require("thirdweb");
const { sepolia } = require("thirdweb/chains");
const { claimTo } = require("thirdweb/extensions/erc721");
const { privateKeyToAccount } = require("thirdweb/wallets");

async function CreateNft(req, res) {
  const file = req.file;
  const NFTname = req.body.NFTname;
  const NFTdescription = req.body.description;
  const userAddress = req.body.userAddress;
  // const account = process.env.Admin_Wallet_Address;

  const client = createThirdwebClient({
    clientId: process.env.VITE_THIRDWEB_CLIENT_ID,
  });
  const account = privateKeyToAccount({
    client,
    privateKey: process.env.ADMIN_PRIVATE_KEY,
  });

  // const _amount = parseInt(req.body.amount);
  const _data = "0x";

  // ✅ Contract banao — ek baar banao
  const contract = getContract({
    client,
    chain: sepolia, // ← Sepolia testnet
    address: process.env.VITE_CONTRACT_ADDRESS,
  });

  // creating meta data and image for NFT
  // console.log(NFTname, NFTdescription);
  const IpfsHash = await pinataUpload(file, NFTname, NFTdescription); //calling ipfs file

  const _baseURIForTokens = "ipfs://" + IpfsHash + "/";

  

  // res.status(200).json({
  //   message: "Your Image is on cloud ",
  //   _baseURIForTokens: _baseURIForTokens,
  // });

  // creating actual NFT











console.log("Contract:", process.env.VITE_CONTRACT_ADDRESS);
  console.log("Admin:", account.address);
  console.log("User:", userAddress);
  console.log("NFT Name:", NFTname);
  console.log("Image:", _baseURIForTokens);



const transactionmint = lazyMint({
  contract,
  nfts: [
    {
      name: NFTname,
      description: NFTdescription,
      image: _baseURIForTokens,
    },
  ],
});

const resultmint = await sendTransaction({
  transaction:transactionmint ,
  account,
});
  


console.log("NFT mint ho gaya",resultmint);

setTimeout(() => {}, 10000);

const transactionclaim = claimTo({
  contract,
  to: userAddress,
  quantity: 1n,
});
console.log("transaction ban gaya")









  const resultclaim = await sendTransaction({
    transaction:transactionclaim,
    account, // admin wallet
  });
console.log("transaction run ho gaya")

res.status(200).json({
    message: "Your Image is on cloud ",
    _baseURIForTokens: _baseURIForTokens,
  });


  // const response = await fetch("https://api.thirdweb.com/v1/contracts/write", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "x-secret-key": process.env.THIRD_WEB_SECRET_KEY,
  //   },
  //   body: JSON.stringify({
  //     calls: [
  //       {
  //         contractAddress: process.env.contractAddress,
  //         method:
  //           "function lazyMint(uint256 _amount, string _baseURIForTokens, bytes _data) returns (uint256 batchId)",
  //         params: [_amount, _baseURIForTokens, _data],
  //       },
  //     ],
  //     chainId: 11155111,
  //     from: userAddress,
  //   }),
  // });

  // const data = await response.json();
  // console.log(data);

  // console.log("Transaction ID:", data.result.transactionIds[0]);

  // // Transaction status check karo
  // const txId = data.result.transactionIds[0];
  // const statusRes = await fetch(
  //   `https://api.thirdweb.com/v1/transactions/${txId}`,
  //   {
  //     headers: {
  //       "x-secret-key": process.env.THIRD_WEB_SECRET_KEY,
  //     },
  //   },
  // );
  // const statusData = await statusRes.json();
  // console.log("TX Status:", JSON.stringify(statusData, null, 2));
}

module.exports = { CreateNft };
