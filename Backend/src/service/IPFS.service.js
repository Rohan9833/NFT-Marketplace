const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

const pinataUpload = async (file) => {
  console.log("KEY:", process.env.PINATA_Api_KEY);
  console.log("SECRET:", process.env.Pinata_Secret);
  const data = new FormData();

  data.append("file", file.buffer, {
    filename: file.originalname,
    contentType: file.mimetype,
  });

  const res = await axios.post(
    "https://api.pinata.cloud/pinning/pinFileToIPFS",
    data,
    {
      maxBodyLength: "Infinity",
      headers: {
        "Content-Type": `multipart/form-data`,
        Authorization: `Bearer ${process.env.PINATA_JWT}`,
        pinata_api_key: process.env.PINATA_Api_KEY,
        pinata_secret_api_key: process.env.Pinata_Secret,
      },
    },
  );
  // console.log("IPFS Hash:", res );
  const imageHash = res.data.IpfsHash;

  const uploadMetadata = async (imageHash) => {
    const metadata = {
      name: "your NFT",
      description: "This is my first NFT",
      image: `ipfs://${imageHash}`,
    };

    const res = await axios.post(
      "https://api.pinata.cloud/pinning/pinJSONToIPFS",
      metadata,
      {
        headers: {
          Authorization: `Bearer ${process.env.PINATA_JWT}`,
          pinata_api_key: process.env.PINATA_Api_KEY,
          pinata_secret_api_key: process.env.Pinata_Secret,
        },
      },
    );

    console.log(res.data.IpfsHash);
    return(res.data.IpfsHash)
  };

  uploadMetadata(imageHash);

  return uploadMetadata;

};

module.exports = { pinataUpload };
