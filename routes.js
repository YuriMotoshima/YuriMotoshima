const express = require('express')
const routes = express.Router()

routes.get("/", function(req, res){
    return res.redirect("/pages")
})

routes.get('/pages', function (req, res) {
    return res.render('pages/index')
})

module.exports = routes