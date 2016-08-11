/**
 * Created by kylin on 16/7/15.
 */

var express = require('express');
var router = express.Router();
var neteaseMusicApi = require('neteaseMusicApi')


module.exports = function (app) {

    app.get('/song', function (req, res) {
        var id = req.query.id
        neteaseMusicApi.song(id,function(data){
            res.json(data)
        })
    });
    app.get('/lrc', function (req, res) {
        var id = req.query.id
        neteaseMusicApi.lrc(id,function(data){
            res.json(data)
        })
    });
    app.get('/search', function (req, res) {
        var name = req.query.name
        var limit = req.query.limit
        var offset = req.query.offset
        neteaseMusicApi.search(name,function(data){
            res.json(data)
        },limit,offset)
    });
    app.get('/playlist', function (req, res) {
        var id = req.query.id
        neteaseMusicApi.playlists(id,function(data){
            res.json(data)
        })
    });
    app.get('/topPlaylists', function (req, res) {
        var limit = req.query.limit
        neteaseMusicApi.topPlaylists(function(data){
            res.json(data)
        },limit)
    });
    app.get('/userPlaylists', function (req, res) {
        var id = req.query.id
        neteaseMusicApi.userPlaylists(id,function(data){
            res.json(data)
        })
    });
};