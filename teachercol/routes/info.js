var {router,express} = require("./common.js");
var {isLogin} = require("../server/user.js");
var {finduser,edituser} = require("../server/info.js");

/* GET  page. */
router.get('/info', async function(req, res, next) {
    try {
        var loginInfo = [{}];
        var useInfo = null;
        if(req.cookies.userid) {
            loginInfo = await isLogin(req.cookies.userid);
            var userid = loginInfo[0].userid;
            useInfo = await finduser(userid);
            res.render('info',{userInfo : loginInfo[0],useInfo:JSON.stringify(useInfo)});
        }else{
            res.redirect('/');
        }
    }catch (err){
        console.log(err.message)
    }
});


/* GET  page. */
router.post('/editInfo', async function(req, res, next) {
    try {
        var useInfo = JSON.parse(req.body.info);
        var userid =parseInt(req.cookies.userid);
        await edituser(userid,useInfo);
        res.send('ok');
    }catch (err){
        console.log(err.message)
    }
});


module.exports = router;
