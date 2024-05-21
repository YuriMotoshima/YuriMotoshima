const express = require("express");
const routes = require("./routes");
const server = express();

server.use(express.static("public"));

server.use(routes);

// Configuração do motor de visualização
server.set("view engine", "ejs");

// Configuração para onde estão localizadas as views
server.set("views", "views");

server.listen(5000, function () {
    console.log("Server is running");
});
