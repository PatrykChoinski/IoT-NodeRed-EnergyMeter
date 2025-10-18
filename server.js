const http = require("http");
const express = require("express");
const RED = require("node-red");

const app = express();
const server = http.createServer(app);

const settings = {
    httpAdminRoot: "/",
    httpNodeRoot: "/",
    userDir: process.env.NODE_RED_USER_DIR || "/home/site/wwwroot/.nodered",
    flowFile: "flows.json",
    credentialSecret: process.env.NODE_RED_SECRET || "changeme",
    uiPort: process.env.PORT || 1880,
    functionGlobalContext: {} // globalne konteksty jeśli potrzebne
};

// Inicjalizacja Node-RED
RED.init(server, settings);

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
