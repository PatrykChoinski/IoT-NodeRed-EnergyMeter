const http = require("http");
const express = require("express");
const RED = require("node-red");

const app = express();
const server = http.createServer(app);

const settings = {
  httpAdminRoot: "/red",
  httpNodeRoot: "/api",
  userDir: __dirname + "/.nodered",
  flowFile: "flows.json",
};
const fs = require("fs");
const path = require("path");

// Załaduj oryginalny plik settings.js z katalogu .nodered
const settingsPath = path.join(__dirname, ".nodered", "settings.js");
const userSettings = require(settingsPath);

// Wymuś poprawny userDir (jeśli nie ma)
userSettings.userDir = userSettings.userDir || path.join(__dirname, ".nodered");

// Ustawienie domyślnego portu
userSettings.uiPort = process.env.PORT || 1880;

// Inicjalizacja Node-RED z pełnymi ustawieniami
RED.init(server, userSettings);

// Statyczne pliki (jeśli chcesz dodać)
app.use("/", express.static("public"));

// Endpointy Node-RED
app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);

// Start serwera
server.listen(settings.uiPort, () => {
    console.log(`Node-RED running on port ${settings.uiPort}`);
});

RED.start().then(() => {
    console.log("Node-RED started successfully");
});
