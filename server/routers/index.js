const fs = require("fs");

module.exports = (app)=>{
  // 遍历所有的路由，把它们逐个添加到 app.use()中
  const result = fs.readdirSync(__dirname);
  result.forEach(path =>{
    // 遍历的路由文件，不包当前的文件
    if(path == "index.js"){return}
    const router = require(`./${path}`);
    app.use(router.routes()).use(router.allowedMethods());
  });
};