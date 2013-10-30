/**
 * Created by sunharuka on 13-10-29.
 */
var http = require('http'),
    router = require('./router'),
    config = require('./config');
function onRequest(req,res){
    router.handleRequest(req,res);
}


exports.start = function(route,handle){
    http.createServer(onRequest).listen(config.LISTEN_PORT).listen(8080,function(){
        console.log('server is running!');
    });
}