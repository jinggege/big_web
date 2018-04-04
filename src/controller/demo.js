
var URL = require("url");
var Render = require(global.CODE_PATH+"/config/render_cfg.js");


/**
 * 课程处理
 */

class Index{

    constructor(){ }

    async control(ctx){
        var args = URL.parse(ctx.req.url,true).query;
        //var type = ctx.params.type;
        //var body = ctx.request.body;
        ctx.body= await Render("index/demo",{userName:"u==name=", level:100});
        
    }



}


module.exports = new Index();