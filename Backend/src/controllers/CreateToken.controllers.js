const { createThirdwebClient } = require("thirdweb");

async function CreateToken(req, res) {
  try {

    const client = createThirdwebClient({
      secretKey: process.env.THIRD_WEB_SECRET_KEY,
    });

    const { name, symbol, supply } = req.body;

    res.status(200).json({
      success: true,
      message: "Thirdweb Connected",
      data: {
        name,
        symbol,
        supply,
      },
      clientCreated: !!client,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

module.exports = { CreateToken };