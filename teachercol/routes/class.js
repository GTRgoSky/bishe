var {router,express} = require("./common.js");
var {selectClass,editClass} = require("../server/class.js");
var {isLogin} = require("../server/user.js");

/* GET users listing. */
//课程表
router.get('/class', async function(req, res, next) {
    try {
        var loginInfo = [{}];
        var classCol = [];
        if(req.cookies.userid) {
            loginInfo = await isLogin(req.cookies.userid);
            var userid = loginInfo[0].userid;
            classCol = await selectClass(userid);
            res.render('class',{userInfo : loginInfo[0],classCol:JSON.stringify(classCol)});
        }else{
            res.redirect('/')
        }
    }catch (err){
        console.log(err.message)
    }
});


router.post('/editClass', async function(req, res, next) {
    if(req.cookies.userid) {
        var loginInfo = await isLogin(req.cookies.userid);
        var a = await editClass(req.body,loginInfo[0].userid);
        res.send(a);
    }else{
        res.redirect('/')
    }
    
});

module.exports = router;
