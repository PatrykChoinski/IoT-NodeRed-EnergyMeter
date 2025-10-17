const http = require("http");
const RED = require("node-red");

const server = http.createServer();
const settings = {
    httpAdminRoot: "/",
    httpNodeRoot: "/",
    userDir: "./.nodered",
    flowFile: "flows.json",
    uiPort: process.env.PORT || 1880
};

RED.init(server, settings);
server.listen(settings.uiPort, () => {
    console.log(`Node-RED running on port ${settings.uiPort}`);
});
RED.start();
