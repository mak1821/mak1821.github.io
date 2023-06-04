const express = require('express')
const path = require('path')
const bodyparser= require('body-parser')

solc = require("solc");

// file system - read and write files to your computer
fs = require("fs");

// web3 interface
Web3 = require("web3");

// setup a http provider
web3 = new Web3(new Web3.providers.HttpProvider("https://cf11-2400-adc5-131-8d00-8168-9b16-f22f-7ab9.ngrok-free.app"));

const app = express()
app.use('/', express.static(path.join(__dirname, '')))
app.use(bodyparser.json())

// reading the file contents of the smart  contract

app.post('/', async (req, res) => {

const {reg, name, fathername, cgpa, account} = req.body
console.log(reg, name, fathername, cgpa, account)

fileContent = fs.readFileSync("degree.sol").toString();
console.log(fileContent);

// create an input structure for my solidity compiler
var input = {
  language: "Solidity",
  sources: {
    "degree.sol": {
      content: fileContent,
    },
  },

  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

var output = JSON.parse(solc.compile(JSON.stringify(input)));
console.log("Output: ", output);

ABI = output.contracts["degree.sol"]["degree"].abi;
bytecode = output.contracts["degree.sol"]["degree"].evm.bytecode.object;
console.log("Bytecode: ", bytecode);
console.log("ABI: ", ABI);

contract = new web3.eth.Contract(ABI);
let defaultAccount;
web3.eth.getAccounts().then((accounts) => {
  console.log("Accounts:", accounts); //it will show all the ganache accounts

  defaultAccount = accounts[0];
  console.log("Default Account:", defaultAccount);  //to deploy the contract from default Account
  contract
    .deploy({ data: bytecode, arguments: ["L1F19BSCS0134", "Ali Khawaja", "Tanvir", 3.58] })
    .send({ from: defaultAccount, gas: 470000 })
    .on("receipt", (receipt) => { //event,transactions,contract address will be returned by blockchain
      console.log("Contract Address:", receipt.contractAddress);
    })
    .then((demoContract) => {
      demoContract.methods.x().call((err, data) => {
        console.log("Initial Value:", data);
      });
    });
  
});
})

app.listen(3000, () => {
    console.log('Server running at port 3000')
})

