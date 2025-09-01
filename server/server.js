//backend api
//we need to import express 
const express = require('express')
//create our app
const app = express()

//setups a route for apis
//req = request
//res = response
app.get("/api", (req, res) => {
    //sent json array
    res.json({"users": ["userOne","userTwo","userThree","userFour","userFive"]})
})

//setups our backends
app.listen(5000,() => {console.log("servewr started on port 5000")})