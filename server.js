// --- Node-RED Azure module path fix ---
const path = require("path");
process.env.NODE_PATH = path.join(__dirname, "node_modules");
require("module").Module._initPaths();
console.log("✅ NODE_PATH set to:", process.env.NODE_PATH);

const fs = require("fs");
const { execSync } = require("child_process");

// 🔧 Automatyczna instalacja zależności jeśli brak node_modules
if (!fs.existsSync(path.join(__dirname, "node_modules"))) {
    console.log("📦 Brak folderu node_modules. Instaluję wszystkie zależności...");
    try {
        execSync("npm install", { stdio: "inherit" });
        console.log("✅ Instalacja zależności zakończona.");
    } catch (err) {
        console.error("❌ Błąd podczas instalacji zależności:", err);
        process.exit(1);
    }
} else {
    console.log("✅ Folder node_modules już istnieje.");
}

const http = require("http");
const express = require("express");
const RED = require("node-red");
const settings = require("./settings.js"); // użycie pliku settings.js

const app = express();
const server = http.createServer(app);

// 🔧 Inicjalizacja Node-RED z ustawieniami z settings.js
RED.init(server, settings);

app.use("/", express.static("public"));
app.use(settings.httpAdminRoot || "/red", RED.httpAdmin);
app.use(settings.httpNodeRoot || "/api", RED.httpNode);

// 🔄 Start serwera
const PORT = process.env.PORT || 1880;
server.listen(PORT, () => {
    console.log(`✅ Node-RED running on port ${PORT}`);
});

RED.start().then(() => {
    console.log("🚀 Node-RED started successfully");
});
