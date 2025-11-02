const path = require('path');

module.exports = {
    adminAuth: null, // brak logowania
    uiPort: process.env.PORT || 1880,
    userDir: process.env.NODE_RED_USER_DIR || "/home/site/wwwroot",
    flowFile: "flows.json",
    credentialSecret: process.env.NODE_RED_SECRET || "changeme",
    editorTheme: {
        projects: { enabled: false }
    },
    functionGlobalContext: {},
    nodesDir: path.join(process.env.NODE_RED_USER_DIR || "/home/site/wwwroot", "node_modules"),
    runtimeMaxWorkers: 1,
    httpNodeRoot: "/",        // <- WAŻNE
    httpAdminRoot: "/red"     // <- panel admina
};
