const path = require("path");
process.env.NODE_PATH = path.join(__dirname, "node_modules");
require("module").Module._initPaths();
console.log("✅ NODE_PATH set to:", process.env.NODE_PATH);

const fs = require("fs");
const { execSync } = require("child_process");
const http = require("http");
const express = require("express");
const RED = require("node-red");
const settings = require("./settings.js");

// automatyczna instalacja node_modules
if (!fs.existsSync(path.join(__dirname, "node_modules"))) {
    console.log("📦 Brak folderu node_modules. Instaluję wszystkie zależności...");
    execSync("npm install", { stdio: "inherit" });
} else {
    console.log("✅ Folder node_modules już istnieje.");
}

const app = express();
const server = http.createServer(app);

// inicjalizacja Node-RED
RED.init(server, settings);

// Node-RED middleware (kolejność ważna!)
app.use(settings.httpAdminRoot || "/red", RED.httpAdmin); // panel admin
app.use(settings.httpNodeRoot || "/", RED.httpNode);      // flows i dashboard

// opcjonalnie statyczny folder
app.use("/", express.static("public"));

// start serwera
const PORT = process.env.PORT || 1880;
server.listen(PORT, () => console.log(`✅ Node-RED running on port ${PORT}`));

RED.start().then(() => console.log("🚀 Node-RED started successfully"));
