const express = require('express');
const routes = express.Router();
const data = require("./data/data_html");

routes.get("/", function(req, res) {
    return res.redirect("/home");
});

routes.get('/home', function(req, res) {
    console.log("Rendering index.ejs");
    return res.render('index', { homeText: data.homeText }); // Renderiza views/index.ejs
});

module.exports = routes;
