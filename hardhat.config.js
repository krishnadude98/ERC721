require("@nomiclabs/hardhat-etherscan");
require("hardhat-deploy");
require("solidity-coverage");
require("hardhat-gas-reporter");
require("hardhat-contract-sizer");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
const SEPOLA_RPC_URL = process.env.SEPOLA_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const API_KEY = process.env.ETHERSCAN_API_KEY;
const POLYGON_API_KEY = process.env.POLYGON_API_KEY;
const COIN_MARKET_CAP_API_KEY = process.env.COIN_MARKET_CAP_API_KEY;
const GORELLI_RPC_URL = process.env.GORELLI_RPC_URL;
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    sepolia: {
      url: SEPOLA_RPC_URL,
      accounts: [PRIVATE_KEY],
      blockConfirmations: 6,
      chainId: 11155111,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
      blockConfirmations: 1,
    },
    goreli: {
      url: GORELLI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 5,
      blockConfirmations: 6,
    },
    polygon_mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/kTZxIUR6MKogwu-aarjjs5euIVls4j0j",
      accounts: [PRIVATE_KEY],
      blockConfirmations: 6,
      chainId: 80001,
    },
  },
  solidity: "0.8.9",
  namedAccounts: {
    deployer: {
      default: 0,
    },
    player: {
      default: 1,
    },
  },
  etherscan: {
    apiKey: {
      sepolia: API_KEY,
      polygonMumbai: POLYGON_API_KEY,
    },
    customChains: [],
  },
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COIN_MARKET_CAP_API_KEY,
    token: "MATIC",
  },
  mocha: {
    timeout: 400000,
  },
};
