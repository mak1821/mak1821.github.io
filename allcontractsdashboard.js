const uri = "mongodb+srv://s80861033:ocWoscm6OnhfrL2T@login.dg7pou2.mongodb.net/?retryWrites=true&w=majority";
const { ethers } = require("ethers");
import * as Realm from "realm-web";
const cluster = "Login";
const database='DVS';
const collections='contracts';

var urlParams = new URLSearchParams(window.location.search);
var token = urlParams.get("token");
var currtoken=process.env.token;

if(token!=currtoken)
{
    redirectToAnotherPage1();
}


function redirectToAnotherPage1() {
    var url = "admin_login.html";
    window.location.href = url;
  }

import 'select2';
var arrayData=[];
document.addEventListener("DOMContentLoaded", async function() {

    const dropdown = document.getElementById("dropdown");
    await execute();


$(document).ready(function() {
    $("#dropdown").select2({
      data: arrayData,
      width: "100%",
      placeholder: "Select an option"
    });
})   

})
document.getElementById('optionselected').onclick = async function() {  
    const optionselected1=dropdown.value;
    redirectToAnotherPage(optionselected1);
}


function redirectToAnotherPage(reg) {
  
    var encodedMessage = encodeURIComponent(reg);
    var encodedtoken = encodeURIComponent(token);
    var url = "getcompleteinfoind.html?message=" + encodedMessage + "&token=" + encodedtoken;
    window.location.href = url;
  }
  



async function execute() {
    if (typeof window.ethereum !== "undefined") {
        const app = new Realm.App({ id: "dvs-qamzx" });
        const credentials = Realm.Credentials.anonymous();
          const user = await app.logIn(credentials);
          const mongo = app.currentUser.mongoClient(cluster);
        const collection = mongo.db(database).collection(collections);
       const data=await user.functions.getAll();
       for (let index = 0; index < data.length; index++) {
       arrayData.push(data[index].reg);
        
       }
        console.log(arrayData);
        
    }
}  