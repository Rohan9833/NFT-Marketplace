// import React, { useState } from "react";
// import "../Style/Createnft.css";
// import axios from "axios";

// const Createnft = () => {
//   const [previewImage, setPreviewImage] = useState(null);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [NFTname, setName] = useState("");
//   const [NFTdescription, setDescription] = useState("");
//   const [NFTamount,setAmount] = useState(1);
//   const formdata = new FormData();


//   const handleImageSelect = (event) => { //  Frontend se reladed
//     const file = event.target.files[0];

//     setSelectedFile(file);

//     if (file) {
//       setPreviewImage(URL.createObjectURL(file));
//     }
//   };



//   async function callme() {
//     formdata.append("image", selectedFile);
//     formdata.append("name", NFTname);
//     formdata.append("description", NFTdescription);



//     // connecting wallet
//     const accounts = await window.ethereum.request({
//       method: "eth_requestAccounts",
//     });
//     const userAddress = accounts[0]; 
  


//     const res = await axios.post(
//       "http://localhost:3000/api/nft/createnft",
//       formdata,
//     );

//     console.log(res.data);
//   }

// return (

//   <div className="createNFTLayout_main_container">

//     <div className="createNFTLayout_card_container">

//       <div className="createNFTLayout_content_row">

//         {/* Image Upload Box */}

//         <label className="createNFTLayout_upload_box">

//           {previewImage ? (

//             <img
//               src={previewImage}
//               alt="preview"
//               className="createNFTLayout_preview_image"
//             />

//           ) : (

//             <span className="createNFTLayout_upload_text">
//               Upload Image
//             </span>

//           )}

//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageSelect}
//             className="createNFTLayout_file_input"
//           />

//         </label>

//         {/* Name + Amount + Description Section */}

//         <div className="createNFTLayout_input_section">

//           {/* NFT Name */}

//           <input
//             type="text"
//             placeholder="Enter NFT name"
//             className="createNFTLayout_name_input"
//             onChange={(e) => setName(e.target.value)}
//           />

//           {/* Amount Input (NEW) */}

//           <input
//             type="number"
//             placeholder="Number of NFTs to Mint"
//             className="createNFTLayout_amount_input"
//             min="1"
//             onChange={(e) => setAmount(e.target.value)}
//           />

//           {/* Description */}

//           <textarea
//             placeholder="Enter description"
//             className="createNFTLayout_description_input"
//             onChange={(e) => setDescription(e.target.value)}
//           />

//         </div>

//       </div>

//       {/* Button */}

//       <div className="createNFTLayout_button_wrapper">

//         <button
//           className="createNFTLayout_create_button"
//           onClick={callme}
//         >
//           Create NFT
//         </button>

//       </div>

//     </div>

//   </div>

// );
// };

// export default Createnft;





import React, { useState } from "react";
import "../Style/Createnft.css";
import axios from "axios";

// ThirdWeb imports
import { createThirdwebClient, getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { useActiveAccount, ConnectButton } from "thirdweb/react";
import { lazyMint } from "thirdweb/extensions/erc721";
import { sendTransaction } from "thirdweb";

// ✅ Client banao — ek baar banao, component ke bahar
const client = createThirdwebClient({
  clientId: import.meta.env.VITE_THIRDWEB_CLIENT_ID
});

// ✅ Contract banao — ek baar banao
const contract = getContract({
  client,
  chain: sepolia, // ← Sepolia testnet
  address: import.meta.env.VITE_CONTRACT_ADDRESS
});

const Createnft = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [NFTname, setName] = useState("");
  const [NFTdescription, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Connected wallet ka address milta hai
  const account = useActiveAccount();

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  async function callme() {
    try {
      // ✅ Check karo wallet connected hai ya nahi
      if (!account) {
        alert("Pehle wallet connect karo!");
        return;
      }

      if (!selectedFile) {
        alert("Image select karo!");
        return;
      }

      setLoading(true);

      // ─── Step 1: Backend pe Pinata upload karo ───
      const formdata = new FormData();
      formdata.append("image", selectedFile);
      formdata.append("name", NFTname);
      formdata.append("description", NFTdescription);

      const res = await axios.post(
        "http://localhost:3000/api/nft/createnft",
        formdata
      );
      console.log(res.data._baseURIForTokens)
      const baseURI  = res.data._baseURIForTokens; // ← backend se baseURI aaya
      console.log("BaseURI:", baseURI);

      // ─── Step 2: Frontend se LazyMint karo ───
      const transaction = lazyMint({
        contract,
        nfts: [{
          name: NFTname,
          description: NFTdescription,
          image: baseURI
        }]
      });

      // ─── Step 3: MetaMask popup aayega — user sign karega ───
      const result = await sendTransaction({
        transaction,
        account // ← user ka wallet
      });

      console.log("NFT Minted!", result);
      alert("NFT ban gaya! 🎉");

    } catch (error) {
      console.log("Error:", error.message);
      alert("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="createNFTLayout_main_container">
      <div className="createNFTLayout_card_container">

        {/* ✅ Wallet Connect Button — ThirdWeb ka ready made button */}
        <ConnectButton client={client} />

        <div className="createNFTLayout_content_row">

          <label className="createNFTLayout_upload_box">
            {previewImage ? (
              <img src={previewImage} alt="preview" className="createNFTLayout_preview_image" />
            ) : (
              <span className="createNFTLayout_upload_text">Upload Image</span>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageSelect}
              className="createNFTLayout_file_input"
            />
          </label>

          <div className="createNFTLayout_input_section">
            <input
              type="text"
              placeholder="Enter NFT name"
              className="createNFTLayout_name_input"
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              placeholder="Enter description"
              className="createNFTLayout_description_input"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

        </div>

        <div className="createNFTLayout_button_wrapper">
          <button
            className="createNFTLayout_create_button"
            onClick={callme}
            disabled={loading}
          >
            {loading ? "Minting..." : "Create NFT"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default Createnft;
