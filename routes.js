const express = require('express');
const routes = express.Router();

routes.get("/", function(req, res) {
    return res.redirect("/pages");
});

routes.get('/pages', function(req, res) {
    console.log("Rendering index.ejs");
    return res.render('index'); // Renderiza views/index.ejs
});

module.exports = routes;
