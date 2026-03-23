// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FileIntegrity {
    // Mapping from file name to its SHA-256 hash
    mapping(string => string) public fileHashes;
    
    event HashStored(string fileName, string hash, uint256 timestamp);

    function storeHash(string memory fileName, string memory hash) public {
        // Prevent overwriting existing hash for a file (Optional logic)
        require(bytes(fileHashes[fileName]).length == 0, "File hash already exists!");
        
        fileHashes[fileName] = hash;
        emit HashStored(fileName, hash, block.timestamp);
    }

    function getHash(string memory fileName) public view returns (string memory) {
        return fileHashes[fileName];
    }
}
