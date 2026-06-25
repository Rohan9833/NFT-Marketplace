import { X } from "lucide-react";
import "../Style/ListNFTModal.css";
import { useState } from "react";
import axios from "axios";
//thirdweb imports

import { useActiveAccount } from "thirdweb/react";
import { createListing } from "thirdweb/extensions/marketplace";
import { prepareContractCall, sendTransaction,waitForReceipt } from "thirdweb";
import { createThirdwebClient, getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { isApprovedForAll } from "thirdweb/extensions/erc721";
import { setApprovalForAll } from "thirdweb/extensions/erc721";

const client2 = createThirdwebClient({
  clientId: import.meta.env.VITE_THIRDWEB_CLIENT_ID,
});

const contract = getContract({
  client: client2,
  chain: sepolia, // ← Sepolia testnet
  address: import.meta.env.VITE_CONTRACT_ADDRESS,
});
const client = createThirdwebClient({
  clientId: import.meta.env.VITE_MARKETPLACE_SHOP_THIRDWEB_CLIENT_ID,
});
const marketplaceContract = getContract({
  client,
  chain: sepolia,
  address: import.meta.env.VITE_MARKETPLACE_SHOP_CONTRACT_ADDRESS,
});

const ListNFTModal = ({ isOpen, onClose, nft }) => {
  const account = useActiveAccount();

  const [price, setPrice] = useState(0);
  const [days, setDays] = useState(1);
  if (!isOpen) return null;
  const tokenId = nft.id;

  console.log(nft);

  async function FinalListAsset() {
    if (!account) {
      alert("Connect wallet first");
      return;
    }
    console.log("Connected Wallet:", account?.address);
    console.log("NFT Owner:", nft.owner);
    console.log("Token ID:", tokenId);

    const formdata = new FormData();
    formdata.append("tokenId", tokenId);
    formdata.append("price", price);

    formdata.append("days", days);

    // const result = await axios.post(
    //   "http://localhost:3000/api/nft/listnft",
    //   FormData,
    // );

    const approvalTx = setApprovalForAll({
      contract,
      operator: import.meta.env.VITE_MARKETPLACE_SHOP_CONTRACT_ADDRESS,
      approved: true,
    });

    const resultmint = await sendTransaction({
      transaction: approvalTx,
      account,
    });


    const receipt = await waitForReceipt({
      client,
      chain:sepolia,
      transactionHash: resultmint.transactionHash,
    });
    
console.log("Permission Granted",approvalTx);


    const transaction = createListing({
      contract: marketplaceContract,
      assetContractAddress: "0x98c6b97fb15789E0c3F61c915Fb5535e178C138f",
      tokenId: BigInt(tokenId),
      pricePerToken: price,
      currencyContractAddress: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      startTimestamp: new Date(),
      endTimestamp: new Date(Date.now() + days * 24 * 60 * 60 * 1000),
    });
    await sendTransaction({
      transaction,
      account,
    });
    console.log("NFT LISTED");
  }

  return (
    <div className="nft-listing-modal-overlay">
      <div className="nft-listing-modal-container">
        <button className="nft-listing-modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <h2 className="nft-listing-modal-heading">List NFT</h2>

        <div className="nft-listing-modal-preview-wrapper">
          <img
            src={
              nft?.metadata?.image?.replace(
                "ipfs://",
                "https://ipfs.io/ipfs/",
              ) || "https://picsum.photos/500"
            }
            alt={nft?.metadata?.name || "NFT"}
            className="nft-listing-modal-preview-image"
          />
        </div>

        <div className="nft-listing-modal-info-section">
          <h3 className="nft-listing-modal-nft-name">
            {nft?.metadata?.name || "Cyber Ape #123"}
          </h3>

          <p className="nft-listing-modal-token-id">
            Token ID: #{nft?.id || "123"}
          </p>
        </div>

        <div className="nft-listing-modal-input-group">
          <label className="nft-listing-modal-input-label">Price (ETH)</label>

          <input
            type="number"
            placeholder="Enter NFT price"
            className="nft-listing-modal-input-field"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>

        {/* <div className="nft-listing-modal-input-group">
          <label className="nft-listing-modal-input-label">Start Date</label>

          <input
            type="datetime-local"
            className="nft-listing-modal-input-field"
          />
        </div> */}

        <div className="nft-listing-modal-input-group">
          <label className="nft-listing-modal-input-label">
            Enter listing duration in days
          </label>

          <input
            type="number"
            onChange={(e) => {
              setDays(e.target.value);
            }}
            placeholder="Listing period (days)"
            className="nft-listing-modal-input-field"
          />
        </div>

        <div className="nft-listing-modal-action-buttons">
          <button className="nft-listing-modal-cancel-button" onClick={onClose}>
            Cancel
          </button>

          <button
            className="nft-listing-modal-submit-button"
            onClick={FinalListAsset}
          >
            List NFT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListNFTModal;
