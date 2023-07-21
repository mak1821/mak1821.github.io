const cluster = "Login";
import * as Realm from "realm-web";
const database='DVS';
const collections='users';

document.getElementById("recovery").onclick=async function recovery(){
    
    const uri = "mongodb+srv://s80861033:ocWoscm6OnhfrL2T@login.dg7pou2.mongodb.net/?retryWrites=true&w=majority";
    let email=document.getElementById('email').value;
    const app = new Realm.App({ id: "dvs-qamzx" });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      const mongo = app.currentUser.mongoClient(cluster);
    const collection = mongo.db(database).collection(collections);
    const user1 = await user.functions.getEmail({'email': email});


    if(!user1)
    {
        alert('Invalid Email Address');
    }
    else
    {
        alert("A recovery email has been dispatched if an account with the email matches.");
    }

    
         
    }
    catch(err) {
        console.error("Failed to Send Email", err);
      }

}