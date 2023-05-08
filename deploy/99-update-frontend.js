const { ethers, network } = require("hardhat");
const fs = require("fs");
const FRONT_END_ABI_FILE = "../nft-frontend/constants/abi.json";
const FRONT_END_ADDRESSES_FILE = "../nft-frontend/constants/contractAddresses.json";

module.exports = async function () {
  if (process.env.UPDATE_FRONT_END) {
    console.log("Updating Front End");
    updateContractAddresses();
    updateAbi();
  }
};

async function updateAbi() {
  const NFT = await ethers.getContract("NFTItem");
  fs.writeFileSync(
    FRONT_END_ABI_FILE,
    NFT.interface.format(ethers.utils.FormatTypes.json)
  );
}

async function updateContractAddresses() {
  const NFT = await ethers.getContract("NFTItem");
  const chainId = network.config.chainId;
  const currentAddresses = JSON.parse(
    fs.readFileSync(FRONT_END_ADDRESSES_FILE, "utf8")
  );
  console.log("inside updateaddress");

  if (chainId in currentAddresses) {
    if (!currentAddresses[chainId].includes(NFT.address)) {
      currentAddresses[chainId].push(NFT.address);
    }
  } else {
    currentAddresses[chainId] = [NFT.address];
  }
  fs.writeFileSync(FRONT_END_ADDRESSES_FILE, JSON.stringify(currentAddresses));
}

module.exports.tags = ["all", "frontend"];
