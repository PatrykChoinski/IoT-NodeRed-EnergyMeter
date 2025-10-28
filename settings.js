const path = require('path');

module.exports = {
    // 🔐 Uwierzytelnianie do edytora Node-RED
    adminAuth: null,

    // 🌐 Port i katalog użytkownika
    uiPort: process.env.PORT || 1880,
    userDir: process.env.NODE_RED_USER_DIR || "/home/site/wwwroot",

    // 🔄 Inne ustawienia
    flowFile: "flows.json",
    credentialSecret: process.env.NODE_RED_SECRET || "changeme",

    editorTheme: {
        projects: {
            enabled: false
        }
    },

    // 🌟 Ścieżka do dodatkowych node_modules
    functionGlobalContext: {},

    // 🧩 Dodatkowe węzły
    //nodesDir: path.join(process.env.NODE_RED_USER_DIR || "/home/site/wwwroot/.nodered", "node_modules"),
    nodesDir: path.join(process.env.NODE_RED_USER_DIR || "/home/site/wwwroot", "node_modules"),
    // 🔧 Ustawienie NODE_PATH w runtime
    runtimeMaxWorkers: 1, // opcjonalne, bezpieczne dla App Service
};
