import axios from "axios";
import FormData from "form-data";
import fs from "fs";

const pinataUpload = async (file) => {
  const data = new FormData();

  data.append("file", fs.createReadStream("./image.png"));

  const res = await axios.post(
    "https://api.pinata.cloud/pinning/pinFileToIPFS",
    data,
    {
      maxBodyLength: "Infinity",
      headers: {
        "Content-Type": `multipart/form-data`,
        pinata_api_key: "YOUR_API_KEY",
        pinata_secret_api_key: "YOUR_SECRET_KEY",
      },
    }
  );

  // console.log(res.data);
};

pinataUpload();