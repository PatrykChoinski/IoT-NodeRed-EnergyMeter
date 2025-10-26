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
const path = require("path");
const userSettings = require(path.join(__dirname, "settings.js"));

userSettings.userDir = path.join(__dirname, ".nodered");
userSettings.flowFile = "flows.json";

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
