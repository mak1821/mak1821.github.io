const HtmlWebpackPlugin = require("html-webpack-plugin");
const path=require("path");
const { EnvironmentPlugin } = require("webpack");
// const { random_string } = require("./src/admin_login");
// var token1=random_string();
// import("./src/admin_login").then(token1=random_string())
var randomstring='';
function random_string()
{
  var characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*?"
  for (let index = 0; index < 32; index++) {
    randomstring +=characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return randomstring;
}
var token1=random_string();
module.exports={
    mode: "production",
    entry: {
        index: "./src/index.js",
        employer_login: "./src/employer_login.js",
        register: "./src/register.js",
        admindeploy: "./src/admindeploy.js",
        getcompleteinfoind: "./src/getcompleteinfoind.js",
        adminsetsubject: "./src/adminsetsubject.js",
        individual_login: "./src/individual_login.js",
        empsearch: "./src/empsearch.js",
        admindashboard: "./src/admindashboard.js",
        admin_login: "./src/admin_login.js",
        subject_reg: "./src/subject_reg.js",
        allcontractsdashboard: "./src/allcontractsdashboard.js",
        forget_password: "./src/forget_password.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    devServer:{
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 3000,
    },
    resolve: {
        // ...
        fallback: {
          // 👇️👇️👇️ add this 👇️👇️👇️
          "fs": false,
          "tls": false,
          "net": false,
          "path": false,
          "zlib": false,
          "http": false,
          "https": false,
          "stream": false,
          "crypto": false,
          "async_hooks": false,
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            chunks: ['index']
        }),
        new EnvironmentPlugin({
            privateaddress: "0x179BD3433F0eFA7e32EFAC4609CA2e361285950c",     
        }),        
        new EnvironmentPlugin({
            mongo_login: "mongodb+srv://s80861033:ocWoscm6OnhfrL2T@login.dg7pou2.mongodb.net/?retryWrites=true&w=majority",     
        }),
        new EnvironmentPlugin({
            token: token1,     
        }),
        new HtmlWebpackPlugin({
            filename: 'employer-login.html',
            template: 'src/employer-login.html',
            chunks: ['employer_login']
        }),
        new HtmlWebpackPlugin({
            filename: 'register.html',
            template: 'src/register.html',
            chunks: ['register']
        }),
        new HtmlWebpackPlugin({
            filename: 'admindeploy.html',
            template: 'src/admindeploy.html',
            chunks: ['admindeploy']
        }),
        new HtmlWebpackPlugin({
            filename: 'getcompleteinfoind.html',
            template: 'src/getcompleteinfoind.html',
            chunks: ['getcompleteinfoind']
        }),
        new HtmlWebpackPlugin({
            filename: 'adminsetsubject.html',
            template: 'src/adminsetsubject.html',
            chunks: ['adminsetsubject']
        }),
        new HtmlWebpackPlugin({
            filename: 'individual_login.html',
            template: 'src/individual_login.html',
            chunks: ['individual_login']
        }),
        new HtmlWebpackPlugin({
            filename: 'empsearch.html',
            template: 'src/empsearch.html',
            chunks: ['empsearch']
        }),
        new HtmlWebpackPlugin({
            filename: 'admin_login.html',
            template: 'src/admin_login.html',
            chunks: ['admin_login']
        }),
        new HtmlWebpackPlugin({
            filename: 'admindashboard.html',
            template: 'src/admindashboard.html',
            chunks: ['admindashboard']
        }),
        new HtmlWebpackPlugin({
            filename: 'subject_reg.html',
            template: 'src/subject_reg.html',
            chunks: ['subject_reg']
        }),
        new HtmlWebpackPlugin({
            filename: 'about-us.html',
            template: 'src/about-us.html',
            chunks: []
        }),       
        new HtmlWebpackPlugin({
            filename: 'forget_password.html',
            template: 'src/forget_password.html',
            chunks: ['forget_password']
        }),
        new HtmlWebpackPlugin({
            filename: 'terms-of-service.html',
            template: 'src/terms-of-service.html',
            chunks: []
        }),
        new HtmlWebpackPlugin({
            filename: 'privacy-policy.html',
            template: 'src/privacy-policy.html',
            chunks: []
        }),
        new HtmlWebpackPlugin({
            filename: 'allcontractsdashboard.html',
            template: 'src/allcontractsdashboard.html',
            chunks: ['allcontractsdashboard']
        }),
    ]
};