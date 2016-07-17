/**
 * Created by kylin on 16/7/15.
 */

var express = require('express');
var router = express.Router();


module.exports = function (app) {

    app.get('/', function (req, res) {
        res.json({
            status:"success"
        })
    });
};