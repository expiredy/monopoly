// node js constants caller
const express = require('express');
const webApp = express();
const fileSystem = require("fs");

// paths config
const LOBBY_PAGE_PATH = ".\\frontend\\markups\\menu\\lobby_page.html";
const MAIN_GAME_TABLE_PATH = ".\\frontend\\markups\\game\\game_field.html";
const MAIN_STYLESHEETS_LOCATION_PATH = "..\\..\\styles\\";

function showHtmlPage(request, response, htmlPagePath) {
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

function sendCssStylesheet(request, response) {
    var stylesheet_file_name = request.param("stylesheet_file_name");
    fileSystem.writeFile(MAIN_STYLESHEETS_LOCATION_PATH + stylesheet_file_name, function(error, stylesheet_file) {
        if (error){
            console.log(error);
            return;
        }
        response.writeHead(200, {"Content-Type": "text/css"});
        response.write(stylesheet_file);
        response.end();
    })
}

function getImageByPath(request, response, imagePath) {

}

function startScriptViewComponent(request, response){
    fileSystem.writeFile()
}

// stylesheets
webApp.get("/stylesheet", function(request, response){ 
    sendCssStylesheet(request, response)
})

// scripts
webApp.get("/script_view_component", function(request, response){ 
    
})

// web pages listeners
webApp.get("/", function(request, response){ 
    showHtmlPage(request, response, LOBBY_PAGE_PATH);
});

webApp.get("/game", function(request, response) {
    showHtmlPage(request, response, MAIN_GAME_TABLE_PATH);
})


webApp.listen(process.env.PORT || 3000, () => console.log("listening on port http://localhost:3000"));