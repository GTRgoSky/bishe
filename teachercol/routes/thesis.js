var {router,express} = require("./common.js");
var {isLogin} = require("../server/user.js");
var {findthesis} = require("../server/thesis.js");

/* GET  page. */
router.get('/thesis', async function(req, res, next) {
    try {
        var loginInfo = [{}];
        var useInfo = null;
        if(req.cookies.userid) {
            loginInfo = await isLogin(req.cookies.userid);
            var userid = loginInfo[0].userid;
            let thesis = await findthesis(userid)
            res.render('thesis',{userInfo : loginInfo[0],thesis:JSON.stringify(thesis)});
        }else{
            res.redirect('/');
        }
    }catch (err){
        console.log(err.message)
    }
});



module.exports = router;
