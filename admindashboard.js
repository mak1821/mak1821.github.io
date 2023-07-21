
var urlParams = new URLSearchParams(window.location.search);
// import {currtoken} from "./randomgenerator.js";
var token = urlParams.get("token");
var currtoken=process.env.token;
// console.log(currtoken);
// console.log("Saved", currtoken);
// console.log(token);
// console.log("Curr Token",currtoken);

if(token!=currtoken)
{
    redirectToAnotherPage1();
}

function redirectToAnotherPage1() {
    var url = "admin_login.html";
    window.location.replace("admin_login.html");
  }

  document.getElementById("b1").onclick=async function allcontracts(){
    redirectToAnotherPage();
  }

  document.getElementById("b2").onclick=async function deploycontract(){
    redirectToAnotherPage2();
  }

  document.getElementById("b3").onclick=async function addsubject(){
    redirectToAnotherPage3();
  }
  document.getElementById("button").onclick=async function logout(){
    redirectToAnotherPage4();
  }


  function redirectToAnotherPage() {
    var encodedtoken = encodeURIComponent(token);
    var url = "allcontractsdashboard.html?token=" + encodedtoken;
    window.location.href = url;
  }
  function redirectToAnotherPage3() {
    var encodedtoken = encodeURIComponent(token);
    var url = "subject_reg.html?token=" + encodedtoken;
    window.location.href = url;
  }

  function redirectToAnotherPage2() {
    var encodedtoken = encodeURIComponent(token);
    var url = "admindeploy.html?token=" + encodedtoken;
    window.location.href = url;
  }

  function redirectToAnotherPage4() {
    var url = "admin_login.html";
    window.location.replace("admin_login.html");
  }
