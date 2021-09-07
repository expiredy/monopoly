const express = require('express');
const path = require('path');
const webApp = express();
const lobby_page_path = ".\\frontend\\markups\\menu\\lobby_page.html";
const fileSystem = require("fs");

var https = require('https');

webApp.get("/", function(response, request){ 
    fileSystem.readFile(lobby_page_path, function(error, html_page) {
        if (error) {
            console.log(error)
            response.status(500).send("Sorry we sucked some milks");
        }
        response.send("<h1>" + html_page + "</h1>");
    })
});

webApp.listen(process.env.PORT || 3000, () => console.log("listening on port http://localhost:3000"));