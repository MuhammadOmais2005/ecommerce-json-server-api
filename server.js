const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

// Enable middlewares
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Use router under /api
server.use("/api", router);

// Export server for Vercel
module.exports = server;
