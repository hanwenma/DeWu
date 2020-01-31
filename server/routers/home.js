const Router = require("koa-router");
const router = new Router({prefix:"/home"}); 
const {mock} = require("mockjs");

router.get('/',(ctx) => {

  ctx.body = mock({
    "banner|4":['@image("200x100", "@color","#fff","")']
  });
})

module.exports = router;