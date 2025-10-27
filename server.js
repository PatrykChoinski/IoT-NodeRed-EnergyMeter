// --- Node-RED Azure module path fix ---
const path = require("path");
process.env.NODE_PATH = path.join(__dirname, "node_modules");
require("module").Module._initPaths();
console.log("✅ NODE_PATH set to:", process.env.NODE_PATH);

const http = require("http");
const express = require("express");
const RED = require("node-red");

const app = express();
const server = http.createServer(app);

const settings = {
  httpAdminRoot: "/red",
  httpNodeRoot: "/api",
  userDir: __dirname,  // ✅ zostaw tak
  flowFile: "flows.json",
  functionGlobalContext: {},
};



RED.init(server, settings);

app.use("/", express.static("public"));
app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);

// ⬇️ Najważniejsze poprawki
const PORT = process.env.PORT || 1880;
server.listen(PORT, () => {
  console.log(`✅ Node-RED running on port ${PORT}`);
});

RED.start().then(() => {
  console.log("🚀 Node-RED started successfully");
});
