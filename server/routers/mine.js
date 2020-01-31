const Router = require("koa-router");
const router = new Router({prefix:"/mine"}); 

router.get('/',(ctx) => {
  ctx.body = "我的";
});

router.get('/:opration',(ctx, next) => {
  ctx.body = `进行${ctx.params.opration}的操作`;
});

module.exports = router;