'use strict'
global.CODE_PATH = __dirname+'/src';
const  ServerCFG  = require("./src/config/server_cfg.js");


var Koa = require("koa");
var Ctroller = require(global.CODE_PATH + '/controller/controller.js');

var app = new Koa();
Ctroller.start( app );

app.listen( ServerCFG.server.port );

console.log( ServerCFG.server.name+":" +ServerCFG.server.port+"  on start");


