// contracts/GameItem.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFTItem is ERC721URIStorage {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  constructor() ERC721("HariToken", "HKT") {}
  event TokenMinted(uint tokenId,address user);

  function createItem(string memory tokenURI) public  {
    uint256 newItemId = _tokenIds.current();
    _mint(msg.sender, newItemId);
    _setTokenURI(newItemId, tokenURI);

    _tokenIds.increment();
    emit TokenMinted(newItemId,msg.sender);
  }
}
