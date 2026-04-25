const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

const pinataUpload = async (file, NFTname, NFTdescription) => {
  const data = new FormData();
  let folderhash;

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

  const imageHash = res.data.IpfsHash;

  const uploadMetadata = async (imageHash) => {
    const metadata = {
      name: NFTname,
      description: NFTdescription,
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
    folderhash = res.data.IpfsHash;
    console.log("ipds wali file", res.data.IpfsHash);
    return folderhash;
  };

  await uploadMetadata(imageHash);
  console.log(uploadMetadata);

  return folderhash;
};

module.exports = { pinataUpload };
