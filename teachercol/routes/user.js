var {router,express} = require("./common.js");
var {login} = require("../server/user.js");

/* GET users listing. */
// 登录
router.get('/login', async function(req, res, next) {
  var a = await login(req.query);
  res.send(a);
});

module.exports = router;
