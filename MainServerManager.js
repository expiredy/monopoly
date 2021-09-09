// node js constants caller
const express = require('express');
const webApp = express();
const fileSystem = require("fs");

// paths config
const LOBBY_PAGE_PATH = ".\\frontend\\markups\\menu\\lobby_page.html";
const MAIN_GAME_TABLE_PATH = ".\\frontend\\markups\\game\\game_field.html";

function getHtmlPage(request, response, htmlPagePath) {
    fileSystem.readFile(htmlPagePath, function(error, html_page) {
        if (error) {
            console.log(error)
            response.status(500).send("<h1>Sorry we sucked some milks</h1>");
        }
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(html_page);
        response.end();
    })
}

function getCssStylesheet(request, response, cssFilePath) {

}

function getImageByPath(request, response, imagePath) {

}

// web pages
webApp.get("/", function(request, response){ 
    getHtmlPage(request, response, LOBBY_PAGE_PATH);
});

webApp.get("/game", function(request, response) {
    getHtmlPage(request, response, MAIN_GAME_TABLE_PATH);
})

// stylesheets

webApp.get("", function(request, response){ 

})

webApp.listen(process.env.PORT || 3000, () => console.log("listening on port http://localhost:3000"));