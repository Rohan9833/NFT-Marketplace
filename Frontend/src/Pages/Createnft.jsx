import React, { useState } from "react";
import "../Style/Createnft.css";
import axios from "axios";

const Createnft = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const handleImageSelect = (event) => {
    const file = event.target.files[0];

    setSelectedFile(file);

    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  async function callme() {
    const formdata = new FormData();
    formdata.append("image", selectedFile);

    const res = await axios.post(
      "http://localhost:3000/api/nft/createnft",
      formdata,
    );

    console.log(res.data);
  }

  return (
    <div className="createNFTLayout_main_container">
      <div className="createNFTLayout_card_container">
        <div className="createNFTLayout_content_row">
          {/* Image Upload Box */}

          <label className="createNFTLayout_upload_box">
            {previewImage ? (
              <img
                src={previewImage}
                alt="preview"
                className="createNFTLayout_preview_image"
              />
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

          {/* Name + Description Section */}

          <div className="createNFTLayout_input_section">
            <input
              type="text"
              placeholder="Enter NFT name"
              className="createNFTLayout_name_input"
            />

            <textarea
              placeholder="Enter description"
              className="createNFTLayout_description_input"
            />
          </div>
        </div>

        {/* Button */}

        <div className="createNFTLayout_button_wrapper">
          <button className="createNFTLayout_create_button" onClick={callme}>
            Create NFT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Createnft;
