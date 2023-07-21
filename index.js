// const express = require('express')
// const path = require('path')
// const bodyparser= require('body-parser')
// const { ok } = require('assert')
// const mongoose=require('mongoose')
// const User=require('./model/user')
// const bcrypt = require('bcryptjs')
// const jwt=require('jsonwebtoken')
// const JWT_SECRET = 'jfdisofhi38479382473%&^&*%&(#$#dfsfewe'
// // const { artifacts } = require("truffle");
// // var degree = artifacts.require("degree");
// const fs = require('fs');
// const solc = require('solc');
// //Web 3 Documentation Code
// const { Web3Auth } = require("@web3auth/modal");
// const Web3 = require("web3");



// // const Web3 = require('web3')
// // const web3 = new Web3(new Web3.providers.HttpProvider('https://data-seed-prebsc-1-s1.binance.org:8545'));

// mongoose.connect('mongodb://127.0.0.1', {
//     useNewUrlParser: true,
// useUnifiedTopology: true
// })

// const app = express()
// app.use('/', express.static(path.join(__dirname, 'dist')))
// app.use(bodyparser.json())

// app.post('/api/employer-login', async (req, res) => {
//     const {usrnme: username, psswrd} = req.body


    // console.log("running employer login");



//     const user=await User.findOne({username}).lean()

//     if(!user)
//     {
//         return res.json({status: 'error', error: 'Invalid username/password'})
//     }

//     if(await bcrypt.compare(psswrd, user.password)){

//         const token=jwt.sign({id: user._id, username: user.username}, JWT_SECRET)
//         return res.json({status: 'ok', data: token})
//     }
//     res.json({status: 'error', error: 'Invalid username/password'})
// })

// app.post('/api/admin', async (req, res) => {




   
//     const {reg, name, fathername, cgpa, account} = req.body
//     console.log(reg, name, fathername, cgpa, account)

//     let fileContent = fs.readFileSync("degree.sol").toString();

//     console.log(fileContent);
//     var input = {
//         language: "Solidity",
//         sources: {
//           "degree.sol": {
//             content: fileContent,
//           },
//         },
      
//         settings: {
//           outputSelection: {
//             "*": {
//               "*": ["*"],
//             },
//           },
//         },
//       };
      
//     var output = JSON.parse(solc.compile(JSON.stringify(input)));
//     // console.log("Output: ", output);

//     ABI = output.contracts["degree.sol"]["degree"].abi;
//     bytecode = output.contracts["degree.sol"]["degree"].evm.bytecode.object;
//     // console.log("Bytecode: ", bytecode);
//     // console.log("ABI: ", ABI);

    


// //     const accountFrom = {
// //       privateKey: '277d2941001439f2149dc92b7f9472914862cc2c59ab112aa230110625c4781c',
// //       address: '0x179BD3433F0eFA7e32EFAC4609CA2e361285950c',
// //     };

// //     const deploy = async () => {
// //       console.log(`Attempting to deploy from account ${accountFrom.address}`);

// //       const incrementer = new web3.eth.Contract(ABI);

// //       const incrementerTx = incrementer.deploy({
// //         data: bytecode,
// //         arguments: [reg, name, fathername, cgpa],
// //       });

// //       const createTransaction = await web3.eth.accounts.signTransaction(
// //         {
// //           data: incrementerTx.encodeABI(),
// //           gas: await incrementerTx.estimateGas(),
// //         },
// //         accountFrom.privateKey
// //       );

// //       const createReceipt = await web3.eth.sendSignedTransaction(createTransaction.rawTransaction);
// //   console.log(`Contract deployed at address: ${createReceipt.contractAddress}`);
// // };

// // deploy();
    
    
//     // contract = new web3.eth.Contract(ABI);
//     // defaultAccount = account;
//     //  console.log("Default Account:", defaultAccount);  //to deploy the contract from default Account
//     // contract
//     // .deploy({ data: bytecode, arguments: [reg, name, fathername, cgpa], })
//     // .send({ from: defaultAccount, gas: 470000 })
//     // .on("receipt", (receipt) => { //event,transactions,contract address will be returned by blockchain
//     //   console.log("Contract Address:", receipt.contractAddress);
//     // })
//     // .then((demoContract) => {
//     //   demoContract.methods.x().call((err, data) => {
//     //     // console.log("Initial Value:", data);
//     //   });
//     // });
  
// // });




//     // if(!user)
//     // {
//     //     return res.json({status: 'error', error: 'Invalid username/password'})
//     // }

//     // if(await bcrypt.compare(psswrd, user.password)){

//     //     const token=jwt.sign({id: user._id, username: user.username}, JWT_SECRET)
//     //     return res.json({status: 'ok', data: token})
//     // }
//     // res.json({status: 'error', error: 'Invalid username/password'})
// })



// app.post('/api/register', async(req, res) => {
//     const {type, eml:email, usrnme: username, psswrd, confrmpsswrd} = req.body
//     console.log(psswrd)
//     console.log(confrmpsswrd)
//     if(!username||typeof username != 'string')
//     {
//         return res.json({status:'error', error: 'Invalid Username'})
//     }
//     else if(psswrd!=confrmpsswrd)
//     {
//         return res.json({status:'error', error: 'Password Mismatch'})
//     }
    
//    const password = await bcrypt.hash(psswrd, 10)
//    try {
//     const response = await User.create({
//         type,
//         email,
//         username,
//         password
//     })
//     console.log('User Created', response)
//    } catch(error) {
//     if(error.code===11000)
//     {
//         //duplicate username
//         return res.json({ status: 'error', error: 'Username already in use'})
//     }
//     else if(error)
//     {
//         throw error
//     }

//    }   
//     // console.log(req.body)
//     res.json({ status: 'ok' })
// })

// app.listen(3000, () => {
    // console.log('Server running at port 3000')
// })