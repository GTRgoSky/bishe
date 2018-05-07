var {router,express} = require("./common.js");
var {login,changePass} = require("../server/user.js");

/* GET users listing. */
// 登录
router.get('/login', async function(req, res, next) {
  var a = await login(req.query);
  res.send(a);
});

//修改密码
router.post('/changepass', async function(req, res, next) {
  var a = await changePass(req.body.old,req.body.passnewword,req.cookies.userid);
  res.send(a);
});


module.exports = router;
