const { ethers } = require("ethers");
var urlParams = new URLSearchParams(window.location.search);
var reg = urlParams.get("message");
const cluster = "Login";
import * as Realm from "realm-web";
const database='DVS';
const collections='contracts';

var token = urlParams.get("token");
var currtoken=process.env.token;

console.log(token);
console.log(reg);
if(token!=currtoken)
{
    redirectToAnotherPage1();
}


function redirectToAnotherPage1() {
    var url = "admin_login.html";
    window.location.href = url;
  }

var clicked = false;
connect();
execute();

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    try {
      await ethereum.request({ method: "eth_requestAccounts" });
    } catch (error) {
      console.log(error);
    }
    const accounts = await ethereum.request({ method: "eth_accounts" });
  } else {
    // document.getElementById("connectButton").innerHTML =
    //   "Please install MetaMask";
  }
}

async function execute() {
  if (typeof window.ethereum !== "undefined") {

    const app = new Realm.App({ id: "dvs-qamzx" });
      const credentials = Realm.Credentials.anonymous();
        const user = await app.logIn(credentials);
        const mongo = app.currentUser.mongoClient(cluster);
      const collection = mongo.db(database).collection(collections);

      const result_mongo = await user.functions.getoneContract({'reg': reg});
      console.log(result_mongo.contract_address);
    
      function htmlEncode(value) {
        return $('<div/>').text(value)
            .html();
        }
        let finalURL =
        'https://chart.googleapis.com/chart?cht=qr&chl=' +
                htmlEncode(result_mongo.contract_address) +
                '&chs=160x160&chld=L|0'
                $('.qr-code').attr('src', finalURL);

    console.log(finalURL);
            

    var contractAddress = result_mongo.contract_address;

    const abi = [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "reg_no1",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "name1",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "father_name1",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "cnic1",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "cgpa1",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "dob1",
                    "type": "string"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "course_code1",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "course_name1",
                    "type": "string"
                },
                {
                    "internalType": "uint8",
                    "name": "credit_hours1",
                    "type": "uint8"
                },
                {
                    "internalType": "string",
                    "name": "grade1",
                    "type": "string"
                }
            ],
            "name": "addsubject",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "cgpa",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "cnic",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "dob",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "father_Name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getname",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getsubjects",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "course_code",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "course_name",
                            "type": "string"
                        },
                        {
                            "internalType": "uint8",
                            "name": "credit_hours",
                            "type": "uint8"
                        },
                        {
                            "internalType": "string",
                            "name": "grade",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct degree.subject[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "reg_no",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, provider);
    try {
        const info=await contract.getname();
        const subjects=await contract.getsubjects();
        console.log(info);
        document.getElementById("name").innerHTML = info[1];
        document.getElementById("reg").innerHTML = info[0];
        document.getElementById("fathername").innerHTML = info[2];
        document.getElementById("dob").innerHTML = info[5];
        document.getElementById("cnic").innerHTML = info[3];
        document.getElementById("cgpa").innerHTML = info[4];

        document.getElementById('showsubjects').onclick = async function() {
            event.preventDefault();
            if(!clicked)
            {
                clicked=true;
                addRow(subjects);
            }

        }
    } catch (error) {
      console.log(error);
    }
  } else {
    // document.getElementById("executeButton").innerHTML =
    //   "Please install MetaMask";
  }
}

function addRow(subjects) {

        console.log(subjects);


            
            for (let i = 0; i < subjects.length; i++) {
                var tableBody = document.getElementById("semesterTableBody");
            var newRow = document.createElement("tr");
            newRow.innerHTML = `
            <td id="course_code-centre">
            </td>
            <td id="title-centre">
            </td>
            <td id="cr-centre">
            </td>
            <td id="grade-centre">
            </td>
            `;
            var titleElement = newRow.querySelector("#course_code-centre");
                    titleElement = newRow.querySelector("#course_code-centre");
                    titleElement.innerHTML = subjects[i][0];
                    titleElement = newRow.querySelector("#title-centre");
                    titleElement.innerHTML = subjects[i][1];
                    titleElement = newRow.querySelector("#cr-centre");
                    titleElement.innerHTML = subjects[i][2];
                    titleElement = newRow.querySelector("#grade-centre");
                    titleElement.innerHTML = subjects[i][3];
                    tableBody.appendChild(newRow);
            }
 
}

    



export {
  connect,
  execute,
};