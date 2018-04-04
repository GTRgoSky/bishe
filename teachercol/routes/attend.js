var {router,express} = require("./common.js");
var {isLogin} = require("../server/user.js");
var {selectAttend,pageAttend,shensu} = require("../server/attend.js");

/* GET users listing. */

//考勤表
router.get('/attend', async function(req, res, next) {
    try {
        var loginInfo = [{}];
        var attend = [];
        var page = 0;
        if(req.cookies.userid) {
            loginInfo = await isLogin(req.cookies.userid);
            var userid = loginInfo[0].userid;
            attend = await selectAttend(userid)
            page = attend.length;
            attend = attend.slice(0,10);
            res.render('attend',{userInfo : loginInfo[0],attend:JSON.stringify(attend),pageNum:page});
        }else{
            res.redirect('/')
        }
    }catch (err){
        console.log(err.message)
    }
});

//考勤表分页
router.get('/page', async function(req, res, next) {
    var index = parseInt(req.query.page);
    var start = (index-1)*10;
    var end = index*10;
    var a = await pageAttend(parseInt(req.cookies.userid),start,end);
    res.send(a);
});

//申诉路由
router.get('/shensu', async function(req, res, next) {

    var a = await shensu(parseInt(req.query.id),req.query.reason);
    res.send(a);
});

module.exports = router;
