const { pinataUpload } = require("../service/IPFS.service.js");

async function CreateNft(params) {
  const result = await pinataUpload(file);
  const url = result;
//   console.log(url);
}
