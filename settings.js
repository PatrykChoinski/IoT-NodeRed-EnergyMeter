module.exports = {
    // 🔐 Uwierzytelnianie do edytora Node-RED
    adminAuth: {
        type: "credentials",
        users: [
            {
                username: "admin",
                password: "$2b$08$XXXXXXXXXXXXXXXXXXXXXXXXX", // zahashowany bcrypt
                permissions: "*"
            }
        ]
    },

    // 🌐 Port i katalog użytkownika (opcjonalnie, redundantne z server.js)
    uiPort: process.env.PORT || 1880,
    userDir: process.env.NODE_RED_USER_DIR || "/home/site/wwwroot/.nodered",

    // 🔄 Inne ustawienia
    flowFile: "flows.json",
    credentialSecret: process.env.NODE_RED_SECRET || "changeme",

    editorTheme: {
        projects: {
            enabled: false
        }
    },

    functionGlobalContext: {}
};
