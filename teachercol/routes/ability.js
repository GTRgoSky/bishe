var {router,express} = require("./common.js");
var {isLogin} = require("../server/user.js");
var {selectAbility} = require("../server/ability.js");

/* GET users listing. */
// 登录
router.get('/ability', async function(req, res, next) {
    try {
        var loginInfo = [{}];
        var ability = [];
        if(req.cookies.userid) {
            loginInfo = await isLogin(req.cookies.userid);
            var userid = loginInfo[0].userid;
            ability = await selectAbility(userid);
            res.render('ability',{userInfo : loginInfo[0],ability:JSON.stringify(ability)});
        }else{
            res.redirect('/')
        }
    }catch (err){
        console.log(err.message)
    }
});

module.exports = router;
