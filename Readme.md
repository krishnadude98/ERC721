# Marketplace Contract to sell erc20 tokens

## Description

This contract is used to create ERC721 Token.

## Technologies Used

- [hardhat](https://hardhat.org/docs)

## Installation

- create .env file

`PRIVATE_KEY=[YOUR_PRIVATE_KEY_HAVING_MUMBAI_MATIC]
POLYGON_API_KEY=[YOUR_POLYGON_SCAN_API_KEY]
ETHERSCAN_API_KEY=[YOUR_ETHERSCAN_API_KEY]
COIN_MARKET_CAP_API_KEY="2dd4233c-e892-44e6-8e89-e499d39bf4bd"
UPDATE_FRONT_END=true`

## Quick Start

- create .env file with SEPOLA_RPC_URL, PRIVATE_KEY, ETHERSCAN_API_KEY, COIN_MARKET_CAP_API_KEY

- Install all dependencies

  `yarn install`

- Compile contract

  `yarn hardhat compile`

- Deploy contract
  `yarn hardhat deploy --network polygon_mumbai`

- Test Contract
  `yarn test`

## Features

- ERC721 token
- Anyone can mint NFT'S with this contract
