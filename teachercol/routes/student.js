var {router,express} = require("./common.js");
var {isLogin} = require("../server/user.js");
var {finduser} = require("../server/info.js");

/* GET  page. */
router.get('/student', async function(req, res, next) {
    try {
        var loginInfo = [{}];
        var useInfo = null;
        if(req.cookies.userid) {
            loginInfo = await isLogin(req.cookies.userid);
            var userid = loginInfo[0].userid;
            useInfo = await finduser(userid);
            res.render('student',{userInfo : loginInfo[0],useInfo:JSON.stringify(useInfo)});
        }else{
            res.redirect('/');
        }
    }catch (err){
        console.log(err.message)
    }
});



module.exports = router;
