var {router,express} = require("./common.js");
var {isLogin} = require("../server/user.js");
var {getstudent,selstudent} = require('../server/student.js');

/* GET  page. */
router.get('/student', async function(req, res, next) {
    try {
        var loginInfo = [{}];
        var useInfo = null;
        if(req.cookies.userid) {
            loginInfo = await isLogin(req.cookies.userid);
            var userid = loginInfo[0].userid;
            let getStu = await getstudent(userid);
            res.render('student',{userInfo : loginInfo[0],getStu:JSON.stringify(getStu)});
        }else{
            res.redirect('/');
        }
    }catch (err){
        console.log(err.message)
    }
});

router.get('/getstudent', async function(req, res, next) {
    try {
        var userid = req.cookies.userid;
        let type = req.query.type;
        let selectGz = await selstudent(userid,type);
        res.send(selectGz);
    }catch (err){
        console.log(err.message)
    }
});

module.exports = router;
