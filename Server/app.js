const express = require('express');
const session = require('express-session');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017";
const dbName = "sessionTest";

var app = express();
app.use(cors());
app.use(session({
    secret: 'asdfghjklqwertyuiop',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 1200000
    }
}))

app.listen(6969, () => {
    console.log("Server Started on 6969");
})

app.get("/addSession", (req,res) => {
    var sessionName = "rohan chougule";
    req.session.name = sessionName;
    res.status(200).send("Done");
})

app.get("/whatsMySessionName", (req,res) => {
    var sessionName = req.session.name;
    res.status(200).send(sessionName);
})