require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

const { PRIVATE_KEY, INFURA_PROJECT_ID, ETHERSCAN_API_KEY } = process.env;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    volta: {
      url: `https://volta-rpc.energyweb.org`,
      accounts: [`0x${PRIVATE_KEY}`],
      chainId: 73799, // Chain ID for Volta network
    },
    // Add other network configurations here as needed
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};
