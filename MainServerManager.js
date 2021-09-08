// node js constants caller
const express = require('express');
const webApp = express();
const fileSystem = require("fs");

// paths config
const LOBBY_PAGE_PATH = ".\\frontend\\markups\\menu\\lobby_page.html";
const MAIN_GAME_TABLE_PATH = ".\\frontend\\markups\\game\\game_field.html";

// css classes' names

webApp.get("/", function(request, response){ 
    fileSystem.readFile(LOBBY_PAGE_PATH, function(error, html_page) {
        if (error) {
            console.log(error)
            response.status(500).send("<h1>Sorry we sucked some milks</h1>");
        }
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(html_page);
        response.end();
    })
});

webApp.get("/game", function(request, response) {
    fileSystem.readFile(MAIN_GAME_TABLE_PATH, function(error, html_page) {
        if (error) {
            console.log(error);
            response.status(500).send("<h1>Sorry we sucked some milks</h1>");
        }
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(html_page);
        response.end();
    })
})

webApp.listen(process.env.PORT || 3000, () => console.log("listening on port http://localhost:3000"));