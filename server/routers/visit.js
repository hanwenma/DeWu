const Router = require("koa-router");
const router = new Router({prefix:"/visit"}); 

router.get('/',(ctx) => {
  ctx.body = "游览数据";
});

router.get('/:id',(ctx, next) => {
  ctx.body = `游览${ctx.params.id}的详情`;
});

module.exports = router;