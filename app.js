/**
 * Created by kylin on 16/7/15.
 */
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

var routes = require('./route/index')

app.use('/static', express.static('./static'))

// app.use(bodyParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

routes(app)

module.exports = app.listen(3500, function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Listening at http://localhost:3500')
})