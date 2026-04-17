const { pinataUpload } = require("../service/IPFS.service.js");

async function CreateNft(req,res) {
  const file = req.file
  const result = await pinataUpload(file);
  console.log(result);
}


module.exports = {CreateNft}