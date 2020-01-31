const Router = require("koa-router");
const router = new Router({prefix:"/login"}); 

router.post('/',(ctx) => {
  ctx.body = "登陆操作";
});

module.exports = router;