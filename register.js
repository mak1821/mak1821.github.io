const cluster = "Login";
import * as Realm from "realm-web";
const bcrypt = require('bcryptjs')
// const jwt=require('jsonwebtoken')
const database='DVS';
const collections='users';
const JWT_SECRET = 'jfdisofhi38479382473%&^&*%&(#$#dfsfewe'

const uri = "mongodb+srv://s80861033:ocWoscm6OnhfrL2T@login.dg7pou2.mongodb.net/?retryWrites=true&w=majority";


document.getElementById('signup').onclick = async function() {
event.preventDefault();
let usertype=document.getElementById('usertype').value;
let email=document.getElementById('email').value;
let username=document.getElementById('username').value.toUpperCase();
let password=document.getElementById('psw').value;
let confirm_password=document.getElementById('cnfrm-psw').value;

    if(!username||typeof username != 'string')
    {
        return res.json({status:'error', error: 'Invalid Username'})
    }
    else if(password!=confirm_password)
    {
        return res.json({status:'error', error: 'Password Mismatch'})
    }
    const password1 = await bcrypt.hash(password, 10);
    try {
        const app = new Realm.App({ id: "dvs-qamzx" });
    const credentials = Realm.Credentials.anonymous();
      const user = await app.logIn(credentials);
      const mongo = app.currentUser.mongoClient(cluster);
    const collection = mongo.db(database).collection(collections);
    const newentry = {
        "type": usertype,
        "email": email,
        "username": username,
        "password": password1
      };
    const result = await user.functions.insertone(newentry);
    if(result.error)
    {   
        alert("Username already exists");
    }
    else
    {
        alert("Registered Successfully! Please wait for admin approval for access control");
    }

    } catch (error) {
        console.log(error);
    }
}