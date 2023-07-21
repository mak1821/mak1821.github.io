const cluster = "Login";
import * as Realm from "realm-web";
const bcrypt = require('bcryptjs')
// const jwt=require('jsonwebtoken')
const database='DVS';
const collections='users';
// var randomstring='';
// import {random_string} from "./randomgenerator.js";




const uri = "mongodb+srv://s80861033:ocWoscm6OnhfrL2T@login.dg7pou2.mongodb.net/?retryWrites=true&w=majority";


document.getElementById('login').onclick = async function() {
  event.preventDefault();
  let email=document.getElementById('email').value.toUpperCase();
  let psw=document.getElementById('psw').value;
    const app = new Realm.App({ id: "dvs-qamzx" });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      const mongo = app.currentUser.mongoClient(cluster);
    const collection = mongo.db(database).collection(collections);
    const user1 = await user.functions.getOneID(email);

    if(!user1)
    {
        alert('Invalid username/password');
    }

    if (user1.usertype==="admin") 
    {
      if(await bcrypt.compare(psw, user1.password))
      {
          alert("User Logged in");
          // console.log(random_string());
          redirectToAnotherPage(user1.username);
      }
      else
      {
        alert("Invalid Username/Password");
      }
    }
    else
    {
      alert("User type verification failed, please select the correct portal");
    }
  } catch(err) {
    console.error("Failed to log in", err);
  }

  
    
 }


 function redirectToAnotherPage() {
  // var randomtoken=random_string();
  // Encode the message using encodeURIComponent to handle special characters
  var token = encodeURIComponent(process.env.token);
  
  // Construct the URL with the encoded message as a parameter
  var url = "admindashboard.html?token=" + token;
  
  // Redirect to the anotherPage.html with the message parameter
  window.location.href = url;
}


// export var currtoken=randomstring;


async function run(){


// if(!user1)
//     {
//         alert('Invalid username/password');
//     }

//     if(await bcrypt.compare(psswrd, user1.password)){

//         const token=jwt.sign({id: user1._id, username: user1.username}, JWT_SECRET)
//         alert("User Logged in");
//         console.log(token);
//     }


}

// const User=require('./model/user')


// mongoose.connect('mongodb://127.0.0.1', {
//     useNewUrlParser: true,
// useUnifiedTopology: true
// })

// document.getElementById('login').addEventListener('submit',async function(event) {
// const user=await User.findOne({username}).lean()


// run().catch(console.dir);

// res.json({status: 'error', error: 'Invalid username/password'})
// })