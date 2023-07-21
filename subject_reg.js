const cluster = "Login";
import * as Realm from "realm-web";
import 'select2';
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


document.addEventListener("DOMContentLoaded", async function() {

const dropdown = document.getElementById("dropdown");
// Sample array

await execute();


    $(document).ready(function() {
        $("#dropdown").select2({
          data: arrayData,
          width: "100%",
          placeholder: "Select an option"
        });
    })   

})

var arrayData = [];
function redirectToAnotherPage(reg) {
  
    // Encode the message using encodeURIComponent to handle special characters
    var encodedMessage = encodeURIComponent(reg);
    var encodedtoken = encodeURIComponent(token);
    
    // Construct the URL with the encoded message as a parameter
    var url = "adminsetsubject.html?message=" + encodedMessage + "&token=" + encodedtoken;
    
    
    // Redirect to the anotherPage.html with the message parameter
    window.location.href = url;
  }
  





// Populate the dropdown with array elements

document.getElementById('optionselected').onclick = async function() {  
    const optionselected1=dropdown.value;
    redirectToAnotherPage(optionselected1);
}

async function execute() {
    if (typeof window.ethereum !== "undefined") {
        // Get the dropdown element
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
        // console.log(result_mongo.contract_address);
      
    }
}  