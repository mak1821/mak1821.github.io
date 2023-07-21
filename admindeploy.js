const { ethers } = require("ethers");
const cluster = "Login";
import * as Realm from "realm-web";
const database='DVS';
const collections='contracts';
let accountAccessRequested = false;
let isTransactionSent = false;
let isTransactionInProgress = false;
const contractAddress = "0xccd78c0B9f0D69F4F97E01B56d1D01664632d654";
var urlParams = new URLSearchParams(window.location.search);
var token = urlParams.get("token");
var currtoken=process.env.token;
var accounts=[];

if(token!=currtoken)
{
    redirectToAnotherPage1();
}
function redirectToAnotherPage1() {
    var url = "admin_login.html";
    window.location.href = url;
  }

const abi = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "reg",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "fathername",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "cnic",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "cgpa",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "dob",
                "type": "string"
            }
        ],
        "name": "createContract",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getContractCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "getContractsByOwner",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

const phone = document.getElementById('cnic');

phone.addEventListener("keydown", (e) => {
    if(e.key === "Backspace" || e.key === "Delete") return;
    if(e.target.value.length === 5) {
        phone.value = phone.value + "-";
    }
    if(e.target.value.length === 13) 
    {
        phone.value = phone.value + "-";
    }
})
const uri = "mongodb+srv://s80861033:ocWoscm6OnhfrL2T@login.dg7pou2.mongodb.net/?retryWrites=true&w=majority";
var reg=null, name=null, fathername=null,cnic=null, cgpa=null, dob=null;
    document.getElementById('deploybutton').onclick = async function() {
    event.preventDefault();
    reg=document.getElementById('reg').value.toUpperCase();
     name=document.getElementById('name').value;
   fathername=document.getElementById('fathername').value;
    cnic=document.getElementById('cnic').value;
   cgpa=document.getElementById('cgpa').value;
   dob=document.getElementById('dob').value;


   if(document.getElementById("reg").value.length==0 ||
    document.getElementById("name").value.length==0||
    document.getElementById("fathername").value.length==0||
    document.getElementById("cnic").value.length!=15||
    document.getElementById("cgpa").value.length==0||
    document.getElementById("dob").value.length==0)
   {
    alert("Incorrect entry, please re-check information entered!");
   }
   else
   {
    try {
        await connect();
        await deploycontract();
    
    } catch (error) {
        console.log("Error in connecting account on metamask: ",error);
    }
   }



}


async function connect() {
  if (typeof window.ethereum !== "undefined") {
    try {
      accounts=await ethereum.request({ method: "eth_requestAccounts" });
      
    } catch (error) {
      console.log(error);
    }
  } else {
      alert("Please install MetaMask");
  }
}

async function deploycontract() 
{
        if (typeof window.ethereum !== "undefined") 
        {
            const app = new Realm.App({ id: "dvs-qamzx" });
            const credentials = Realm.Credentials.anonymous();
              const user = await app.logIn(credentials);
              const mongo = app.currentUser.mongoClient(cluster);
            const collection = mongo.db(database).collection(collections);

            const regcheck = await user.functions.getoneContract({'reg': reg});
            if(!regcheck)
            {
                accounts[0]=accounts[0].toLowerCase();
                var envprivateaddress=process.env.privateaddress.toLowerCase();
                if(accounts[0]==envprivateaddress)
                {
                    const provider = new ethers.providers.Web3Provider(window.ethereum);
                    const signer = provider.getSigner();
                    
                    var contract = new ethers.Contract(contractAddress, abi, signer);
                    try {
                    const createTX=await contract.createContract(reg, name, fathername,cnic, cgpa, dob);
                    await createTX.wait();
                
                    contract = new ethers.Contract(contractAddress, abi, provider);
                    const info=await contract.getContractsByOwner("0x179BD3433F0eFA7e32EFAC4609CA2e361285950c");
                    console.log(info[info.length-1]);
                

                    const newentry = {
                        reg: reg,
                        "contract_address": info[info.length-1],
                        };
                    const result_mongo = await user.functions.insertonecontract(newentry);
                    console.log(result_mongo);
                
                    } catch (error) {
                    console.log(error);
                    }
                }
                else
                {
                    alert("Metamask Account Authorization Failed");
                }

                
            }
            else
            {

            alert("Contract with this registration number already exists!");
            }
        } 
        else 
        {
            alert("Please install MetaMask");
        }
}
        
        
  


