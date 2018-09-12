var http = require('http');
var app = require('./config/express');


var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};





http.createServer(app).listen(3000, function() {

	console.log("Iniciando o servidor");
	console.log("..");
	console.log("....");
	console.log("......");
	console.log("........");
	console.log("..........");
	console.log("............");
	console.log("..............");

	console.log("Servidor iniciado, let's hack! ");

});
