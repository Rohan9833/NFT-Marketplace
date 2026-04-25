const { pinataUpload } = require("../service/IPFS.service.js");

async function CreateNft(req, res) {
  const file = req.file;
  const NFTname = req.body.name;
  const NFTdescription = req.body.description;
  const userAddress = req.body.userAddress;
  const _amount = parseInt(req.body.amount);
  const _data = "0x";

  // creating meta data and image for NFT
  console.log(NFTname, NFTdescription);
  const IpfsHash = await pinataUpload(file, NFTname, NFTdescription); //calling ipfs file
  const _baseURIForTokens = "https://ipfs.io/ipfs/" + IpfsHash + "/";
  console.log("file ka base url", _baseURIForTokens);

  console.log({
    _amount,
    type: typeof _amount,
    _baseURIForTokens,
    userAddress,
  });


  res.status(200).json({"message":"Your Image is on cloud ",_baseURIForTokens:_baseURIForTokens});

  // creating actual NFT

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
