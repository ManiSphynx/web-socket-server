const Server = require("../config");
require("dotenv").config();

const server = new Server();
server.listen();
