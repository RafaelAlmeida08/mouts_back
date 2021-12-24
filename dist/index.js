"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const server_1 = require("./config/server");
require("./infrastructure/database");
const routes_1 = require("./routes");
server_1.server.use('/', routes_1.routes);
server_1.server.listen(process.env.PORT || 5000, () => console.log('Server is running on port 5000'));
