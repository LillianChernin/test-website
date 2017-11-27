var expressLib = require('express');
var webServer = expressLib();
webServer.set('port', process.env.PORT);
webServer.use(express.static(__dirname + 'public'));
webServer.get('/', function (req, res) {
    res.send('hello world')
})