// node js constants caller
const express = require('express');
const webApp = express();
const fileSystem = require("fs");

// paths config
const LOBBY_PAGE_PATH = ".\\frontend\\lobby_page.html";
const MAIN_GAME_TABLE_PATH = ".\\frontend\\game_field.html";

const MAIN_STYLESHEETS_LOCATION_PATH = ".\\frontend\\styles\\";
const MAIN_VIEW_SCRIPT_PATH = ".\\frontend\\scripts\\"
const MAIN_IMAGES_DIRECTORY_PATH = ".\\frontend\\images\\"

// parameters config
const stylesheet_file_param_name = "stylesheet_file_name";
const script_file_param_name = "script_file_name";
const image_file_param_name = "image_file_name";

function showHtmlPage(response, htmlPagePath) {
    fileSystem.readFile(htmlPagePath, function(error, html_page) {
        if (error) {
            console.log(error)
            response.status(500).send("<h1>Sorry we sucked some milks</h1>");
        }
        // response.writeHead(200, {"Content-Type": "text/html"});
        response.write(html_page);
        response.end();
    })
}

function sendCssStylesheet(request, response) {
    var stylesheetFileName = MAIN_STYLESHEETS_LOCATION_PATH + request.param(stylesheet_file_param_name);
    console.log(stylesheetFileName);
    fileSystem.writeFile(stylesheetFileName, function(error, stylesheet_file) {
        if (error){
            console.log(error);
            response.status(500)
        }
        // response.writeHead(200, {"Content-Type": "text/css"});
        response.write(stylesheet_file);
        response.end();
    })
}

function getImageByPath(request, response, imagePath) {
    var imageFileName = MAIN_IMAGES_DIRECTORY_PATH + request.param(image_file_param_name);
    console.log(imageFileName);
    fileSystem.writeFile(imageFileName, function(error, imageFile) {
        if (error){
            console.log(error);
            response.status(500)
        }
        // response.writeHead(200, {"Content-Type": "image/png"});
        response.write(imageFile);
        response.end();
    })

}

function scriptViewComponent(request, response){
    var scriptViewComponentFile = MAIN_VIEW_SCRIPT_PATH + request.param(script_file_param_name);
    console.log(scriptViewComponentFile);
    fileSystem.writeFile(scriptViewComponentFile, function(error, scriptViewComponentFile){
        if (error){
            console.log(error);
            response.status(500)
        }
        // response.writeHead(200, {"Content-Type": "text/javascript"});
        response.write(scriptViewComponentFile);
        response.end();
    })
}

// stylesheets
webApp.get("/stylesheet", function(request, response){ 
    sendCssStylesheet(request, response);
})

// scripts
webApp.get("/script_view_component", function(request, response){ 
    scriptViewComponent(request, response);
})

// web pages listeners
webApp.get("/", function(request, response){ 
    showHtmlPage(response, LOBBY_PAGE_PATH);
});

webApp.get("/game", function(request, response) {
    showHtmlPage(response, MAIN_GAME_TABLE_PATH);
})

webApp.get("/login", function(request, response) {
    
})

webApp.listen(process.env.PORT || 3000, () => console.log("listening on port http://localhost:3000"));
