/*jslint node: true */
/*jslint esversion: 6*/
/*jslint eqeqeq: true */

/* global require */

(function() {
    "use strict";

    const express = require("express");
    const app = express();
    const fs = require("fs");

    const bodyParser = require("body-parser");
    const cors = require("cors");

    let user={};
    let available={};

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(cors());

    //let devices = JSON.parse(fs.readFileSync(__dirname + 'resources/devices.json'));
    // TODO add REST methods

    app.post("/login", (req, res) => {
        authenticate(req, res);
    });

    app.get("/details/:id", (req, res) => {
        
    })

    /**
     * Send the list of available devices to the client
     * @param req The request
     * @param res The response
     */
    function getAvailable(req, res) {
        //console.log(available);
        res.json(available);
    }

    /**
     * Authenticate the user specified in the request
     * @param req The request
     * @param res The response
     */
    function authenticate(req, res) {
        // TODO check credentials and respond to client accordingly
        console.log(req.body);
        res.send("200");
        /*
        if(req.body.username === user.username && req.body.password === user.password){
            res.send("200", req.body);
        }
        */
    }

    /**
     * Change the users password and store it to the login config file
     * @param req The request
     * @param res The response
     */
    function changePassword(req, res) {
        // TODO check old password and store new password
        if(req.password===user.password){
            user.password=req.newPassword;
        }
    }

    /**
     * Read the user data from the login config file, parse it and store it in 'user'
     */
    function readUser() {
        // TODO load user data from file
        fs.readFile('./resources/login.config', 'utf8', (err, data) =>{
            user.username=data.split("\r\n")[0].replace("username: ", "");
            user.password=data.split("\r\n")[1].replace("password: ", "");
        });
    }

    /**
     * Read the available devices data from the json file and store it in 'available'
     */
    function readAvailable() {
        // TODO load available devices from file
        fs.readFile("./resources/devices.json", (err, data) =>{
            available = JSON.parse(data);
            //console.log(available);
        }); 
    }

    const server = app.listen(8081, () => {
        readUser();
        readAvailable();

        const host = server.address().address;
        const port = server.address().port;
        console.log("Big Smart Production Server listening at http://%s:%s", host, port);
    });
})();
