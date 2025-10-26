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
  functionGlobalContext: {}, // wymagane przez dashboard
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
