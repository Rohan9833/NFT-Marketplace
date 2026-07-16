const { createThirdwebClient, getContract } = require("thirdweb");
const { privateKeyToAccount } = require("thirdweb/wallets");
const { sepolia } = require("thirdweb/chains");


async function ListNft(req, res) {
  // console.log(req.body)
  console.log(process.env.MARKETPLACE_SHOP_SECRET_KEY);
console.log(process.env.MARKETPLACE_SHOP_SECRET_KEY?.length);
  const client = createThirdwebClient({
    clientId: process.env.MARKETPLACE_SHOP_THIRDWEB_CLIENT_ID,
  });
  const marketplaceContract = getContract({
    client,
    chain: sepolia,
    address: process.env.MARKETPLACE_SHOP_CONTRACT_ADDRESS,
  });
  const account = privateKeyToAccount({
    client,
    privateKey: process.env.ADMIN_PRIVATE_KEY_ROHAN,
  });

  const transaction = createListing({
    contract: marketplaceContract,
    assetContractAddress: "0x98c6b97fb15789E0c3F61c915Fb5535e178C138f",
    tokenId: BigInt(tokenId),
    pricePerToken: price,
    currencyContractAddress: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    startTimestamp: new Date(),
    endTimestamp: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });
  await sendTransaction({
    transaction,
    account,
  });
}

module.exports = { ListNft };
