const Router = require("koa-router");
const router = new Router({prefix:"/identification"}); 

router.get('/',(ctx) => {
  ctx.body = "鉴定数据";
});

router.get('/:id',(ctx, next) => {
  ctx.body = `鉴定${ctx.params.id}物品`;
});

module.exports = router;