const Koa = require("koa");
const routers = require("./routers");

const app = new Koa();

routers(app);

app.listen(5000,(error)=>{
  if(!error){
    console.log("server is running at port: 5000");
  }else{
    console.log("服务器启动失败");
  }
});