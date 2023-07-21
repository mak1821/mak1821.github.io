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

var subjects={
	"Introduction to Computing": ["CSCS1513", "Introduction to Computing", 3],
	"Introduction to Computing - Lab": ["CSCS1511", "Introduction to Computing - Lab", 1],
	"Logic Thinking": ["CSHU2833", "Logic Thinking", 3],
	"English Composition & Comprehension": ["CSHU1823", "English Composition & Comprehension", 3],
	"Basic Electronics": ["CSSS1723","Basic Electronics", 3],
	"Islamic and Religious Studies": ["CSHU1863","Islamic and Religious Studies", 3],
	"Programming Fundamentals": ["CSCP1013","Programming Fundamentals", 3],
	"Programming Fundamentals - Lab": ["CSCP1011","Programming Fundamentals - Lab", 1],
	"Digital Logic Design": ["CSCS2523","Digital Logic Design", 3],
	"Digital Logic Design - Lab": ["CSCS2521","Digital Logic Design - Lab", 1],
	"Calculus and Analytical Geometry": ["CSSS1713","Calculus and Analytical Geometry", 3],
	"Communication & Presentation Skills": ["CSHU1873","Communication & Presentation Skills", 3],
	"Pakistan Studies": ["CSHU1893","Pakistan Studies", 3],
	"Object Oriented Programming": ["CSCP2023","Object Oriented Programming", 3],
	"Object Oriented Programming - Lab": ["CSCP2021","Object Oriented Programming - Lab", 1],
	"Computer Organization & Assembly Language": ["CSCS3543","Computer Organization & Assembly Language", 3],
	"Computer Organization & Assembly Language - Lab": ["CSCS3541","Computer Organization & Assembly Language - Lab", 1],
	"Multivariate Calculus": ["CSSS2733","Multivariate Calculus", 3],
	"Discrete Structures": ["CSAL1213","Discrete Structures", 3],
	"Financial Accounting": ["CSMG1923","Financial Accounting", 3],
	"Introduction to Psychology": ["CSHU1843","Introduction to Psychology", 3],
	"Introduction to Business": ["CSMG1933","Introduction to Business", 3],
	"Data Structure & Algorithms": ["CSCP2033","Data Structure & Algorithms", 3],
	"Data Structure & Algorithms - Lab": ["CSCP2031","Data Structure & Algorithms - Lab", 1],
	"Introduction to Database Systems": ["CSDB2313","Introduction to Database Systems", 3],
	"Introduction to Database Systems - Lab": ["CSDB2311","Introduction to Database Systems - Lab", 1 ],
	"Probability and Statistics": ["CSSS2743","Probability and Statistics", 3],
	"Linear Algebra": ["CSSS2753","Linear Algebra", 3],
	"Microcontroller Programming and Interfacing": ["CSST3663","Microcontroller Programming and Interfacing", 3],
	"3D Computer Graphics": ["CSAL4323","3D Computer Graphics", 3],
	"Programming for Big Data": ["CSDS4423","Programming for Big Data", 3],
	"Operating Systems": ["CSCS3553","Operating Systems", 3 ],
	"Operating Systems - Lab": ["CSCS3551","Operating Systems - Lab", 1],
	"Introduction to Software Engineering": ["CSSE3113","Introduction to Software Engineering", 3 ],
	"Design and Analysis of Algorithm": ["CSAL3233","Design and Analysis of Algorithm", 3],
	"Differential Equation": ["CSSS2763","Differential Equation", 3 ],
	"Web Application Development": ["CSSE3143","Web Application Development", 3],
	"Mobile Application Development": ["CSCP3063","Mobile Application Development", 3],
	"Introduction to Image Processing": ["CSAL3203","Introduction to Image Processing", 3],
	"Game Development": ["CSST3633","Game Development", 3 ],
	"Artificial Intelligence": ["CSAL3243","Artificial Intelligence", 3],
	"Artificial Intelligence - Lab": ["CSAL3241","Artificial Intelligence - Lab", 1],
	"Computer Communications and Networks": ["CSNC2413","Computer Communications and Networks", 3],
	"Computer Communications and Networks - Lab": ["CSNC2411","Computer Communications and Networks - Lab", 1],
	"Theory of Automata": ["CSAL3253","Theory of Automata", 3],
	"Technical and Business Writing": ["CSHU2813","Technical and Business Writing", 3],
	"Data Analysis Techniques": ["CSDB3363","Data Analysis Techniques", 3],
	"Advanced 3D Modeling for Games": ["CSAL3213","Advanced 3D Modeling for Games", 3],
	"Computational Geometry for Designing and Animation": ["CSAC3613","Computational Geometry for Designing and Animation", 3],
	"Information Security": ["CSNC3413","Information Security", 3 ],
	"Compiler Construction": ["CSCS4573","Compiler Construction", 3 ],
	"Numerical Computing": ["CSAL4263","Numerical Computing", 3 ],
	"Final Year Project 1": ["CSSE4173","Final Year Project 1", 3],
	"Organizational Behavior and Culture": ["CSMG3943","Organizational Behavior and Culture", 3 ],
	"Technology Entrepreneurship": ["CSMG2913","Technology Entrepreneurship", 3],
	"Introduction to Data Science": ["CSDB4313","Introduction to Data Science", 3],
	"Big Data Analytics": ["CSDS4473","Big Data Analytics", 3],
	"Professional Practices": ["CSGE4963","Professional Practices", 3],
	"Final Year Project 2": ["CSSE4183","Final Year Project 2", 3],
	"Introduction to Deep Learning": ["CSAL4333","Introduction to Deep Learning", 3],
	"Introduction to Natural Language Processing": ["CSAL4253","Introduction to Natural Language Processing", 3],
	"Introduction to Machine Learning": ["CSAL4243","Introduction to Machine Learning", 3]
}


var subjectObject = {
	"CS Core": 
	[
	  "Introduction to Computing",
	  "Introduction to Computing - Lab",
	  "Basic Electronics",
	  "Logic Thinking",
	  "Programming Fundamentals",
	  "Programming Fundamentals - Lab",
	  "Digital Logic Design",
	  "Digital Logic Design = Lab",
	  "Calculus and Analytical Geometry",
	  "Object Oriented Programming",
	  "Object Oriented Programming - Lab",
	  "Computer Organization & Assembly Language",
	  "Computer Organization & Assembly Language - Lab",
	  "Multivariate Calculus",
	  "Discrete Structures",
	  "Data Structure & Algorithms",
	  "Data Structure & Algorithms - Lab",
	  "Introduction to Database Systems",
	  "Introduction to Database Systems - Lab",
	  "Probability and Statistics",
	  "Linear Algebra",
	  "Operating Systems",
	  "Operating Systems - Lab",
	  "Introduction to Software Engineering",
	  "Design and Analysis of Algorithm",
	  "Differential Equation",
	  "Artificial Intelligence",
	  "Artificial Intelligence - Lab",
	  "Computer Communications and Networks",
	  "Computer Communications and Networks - Lab",
	  "Theory of Automata",
	  "Information Security",
	  "Compiler Construction",
	  "Numerical Computing",
	  "Professional Practices",
	  "Final Year Project 1",
	  "Final Year Project 2",
  ],
	"CS Elective": 
	[
	  "Microcontroller Programming and Interfacing",
	  "3D Computer Graphics",
	  "Programming for Big Data",
	  "Web Application Development",
	  "Mobile Application Development",
	  "Introduction to Image Processing",
	  "Game Development",
	  "Data Analysis Techniques",
	  "Advanced 3D Modeling for Games",
	  "Computational Geometry for Designing and Animation",
	  "Introduction to Data Science",
	  "Big Data Analytics",
	  "Introduction to Deep Learning",
	  "Introduction to Natural Language Processing",
	  "Introduction to Machine Learning",
  ],
	"Uni Elective": 
	[
	  "English Composition & Comprehension",
	  "Islamic and Religious Studies",
	  "Pakistan Studies",
	  "Financial Accounting",
	  "Introduction to Psychology",
	  "Introduction to Business",
	  "Technical and Business Writing",
	  "Organizational Behavior and Culture",
	  "Technology Entrepreneurship",
  ]
  }
  window.onload = function() {
	var subjectSel = document.getElementById("type");
	var topicSel = document.getElementById("name");
	for (var x in subjectObject) {
	  subjectSel.options[subjectSel.length] = new Option(x);
	}
	subjectSel.onchange = function() {
	  topicSel.length = 1;
	  var z = subjectObject[subjectSel.value];
	  for (var i = 0; i < z.length; i++) {
		topicSel.options[topicSel.length] = new Option(z[i], z[i]);
	  }
	}
	topicSel.onchange = function() {
	  
	}
  }


document.getElementById('entry').onclick = async function() {
	event.preventDefault();
	const selected=document.getElementById("name").value;
	const grade=document.getElementById("grade").value;
	const selected_details=subjects[selected];
	const app = new Realm.App({ id: "dvs-qamzx" });
      const credentials = Realm.Credentials.anonymous();
        const user = await app.logIn(credentials);
        const mongo = app.currentUser.mongoClient(cluster);
      const collection = mongo.db(database).collection(collections);
	
      const result_mongo = await user.functions.getoneContract({'reg': reg});


    var contractAddress = result_mongo.contract_address;
	connect();


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
		const subjects=await contract.getsubjects();
		var i=0;
		for (i; i < subjects.length; i++) {
			if(subjects[i][1]==selected)
			{
				alert("Subject Already Exists!");
				break;
			}
			
		}
		if(i==subjects.length)
		{
			execute(selected_details, grade, contractAddress);
		}
	} catch (error) {
		console.log(error);
	  }
}


async function connect() {
  if (typeof window.ethereum !== "undefined") {
    try {
      await ethereum.request({ method: "eth_requestAccounts" });
    } catch (error) {
      console.log(error);
    }
  } else {
      alert("Please install MetaMask");
  }
}

async function execute(selected_details, grade, contractAddress) {
  if (typeof window.ethereum !== "undefined") {
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
	]
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      await contract.addsubject(selected_details[0], selected_details[1], selected_details[2], grade);
	  alert("Subject Added Successfully!");
    } catch (error) {
      console.log(error);
    }
  } else {
    document.getElementById("executeButton").innerHTML =
      "Please install MetaMask";
  }
}

export {
  connect,
  execute,
};