const { request, response } = require("express");
const express = require("express");
const app=express();
app.get("/",(req,res) => {
    // res.sendStatus(300);
    res.send("hello")} )
app.post("/",(req,res) => {res.send("hello1")} )
 
app.listen(500);

