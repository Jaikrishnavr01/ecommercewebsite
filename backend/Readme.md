* to Intiliaze backend package.json file
- npm init  

* create app.js and install -  npm i nodemon and after that in package.json set the entrie point as app js and add this in script   "start": "nodemon app.js", 

- npm express
# app.js
const express = require("express")
const app = express();
app.listen(8000, () => {
    console.log("server listening to port 8000 in production");
    
}) 


