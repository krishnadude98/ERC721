const { ethers } = require("hardhat");
const networkConfig = {
  11155111: {
    name: "sepolia",
    interval: "30",
  },
  31337: {
    name: "hardhat",
    interval: "30",
  },
  5: {
    name: "goreli",
    interval: "30",
  },
  80001: {
    name: "polygon",
    interval: "30",
  },
};

const developmentChains = ["hardhat", "localhost"];

module.exports = {
  networkConfig,
  developmentChains,
};
