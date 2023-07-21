// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./degreearray.sol";

contract degreeContractFactory {
    address private factoryAdmin;
    mapping(address => address[]) private contractOwners;
    address[] private allContracts;
    struct listedTokens{
        address contractAddress;
        uint256 tokenId;
        uint256 price;
        string tokenURI;
    }
    event ContractCreated(address indexed childContract);
    // event ContractCreated(address indexed owner, address indexed contractAddress);

    constructor() {
        factoryAdmin = msg.sender;
    }

    function createContract(string memory reg, string memory name, string memory fathername, string memory cnic, string memory cgpa, string memory dob) public {
        degree newContract = new degree(reg, name, fathername,cnic, cgpa, dob);
        contractOwners[msg.sender].push(address(newContract));
        allContracts.push(address(newContract));
        // return address(newContract);
        emit ContractCreated(address(newContract));

    }

    function getContractCount() public view returns (uint256) {
        return allContracts.length;
    }

    function getContractsByOwner(address owner) public view returns (address[] memory) {
        return contractOwners[owner];
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    function withdraw() public payable{
        payable(factoryAdmin).transfer(address(this).balance);
    }
}
