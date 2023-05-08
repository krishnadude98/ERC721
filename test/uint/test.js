const {
  developmentChains,
  networkConfig,
} = require("../../helper-hardhat-config");
const { getNamedAccounts, deployments, ethers, network } = require("hardhat");
const { assert, expect } = require("chai");
const {
  experimentalAddHardhatNetworkMessageTraceHook,
} = require("hardhat/config");
const { time, mine } = require("@nomicfoundation/hardhat-network-helpers");

!developmentChains.includes(network.name)
  ? describe.skip
  : describe("Erc20", function () {
      let erc20, deployer, marketplace;
      const chainId = network.config.chainId;

      beforeEach(async function () {
        [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15] =
          await ethers.getSigners();
        deployer = (await getNamedAccounts()).deployer;
        await deployments.fixture(["all"]);
        erc20 = await ethers.getContract("NFTItem", deployer);
      });

      describe("functionality", function () {
        it("should allow everyone to mint tokens", async () => {
          await erc20.connect(p1).createItem("http:test.com/token");
          await erc20.connect(p2).createItem("http:test.com/token");
          await erc20.connect(p3).createItem("http:test.com/token");
          await erc20.connect(p4).createItem("http:test.com/token");
          let ownerOne = await erc20.connect(p2).ownerOf("0");
          let ownerTwo = await erc20.connect(p2).ownerOf("1");
          let ownerThree = await erc20.connect(p2).ownerOf("2");
          let ownerFour = await erc20.connect(p2).ownerOf("3");
          assert.equal(ownerOne, p1.address);
          assert.equal(ownerTwo, p2.address);
          assert.equal(ownerThree, p3.address);
          assert.equal(ownerFour, p4.address);
        });

        it("allow to mint multiple tokens for same user", async () => {
          await erc20.connect(p1).createItem("http:test.com/token");
          await erc20.connect(p1).createItem("http:test.com/token");
          let bal = await erc20.connect(p1).balanceOf(p1.address);
          assert.equal(bal.toString(), "2");
        });
      });
    });
