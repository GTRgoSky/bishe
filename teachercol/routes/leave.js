var {router,express} = require("./common.js");
var {isLogin} = require("../server/user.js");
var {selectLeave,lostLeave,getLeave} = require("../server/leave.js");
var {finduser} = require("../server/info.js");

//请假表
router.get('/leave', async function(req, res, next) {
    try {
        var loginInfo = [{}];
        var leave = [];
        var nianjia = '';
        if(req.cookies.userid) {
            loginInfo = await isLogin(req.cookies.userid);
            var userid = loginInfo[0].userid;
            nianjia = await finduser(userid);
            leave = await selectLeave(userid);
            res.render('leave',{userInfo : loginInfo[0],nianjia:nianjia[0].nianjia,leave:JSON.stringify(leave)});
        }else{
            res.redirect('/')
        }
    }catch (err){
        console.log(err.message)
    }
});

//销假操作
router.get('/editleave', async function(req, res, next) {
    try {
        var parmas = req.query;
        await lostLeave(parseInt(parmas.zt),parseInt(parmas.id));
        res.send('ok');
    }catch (err){
        console.log(err.message)
    }
});


//申请假条
router.post('/getleave', async function(req, res, next) {
    try {
        var parmas = req.body;
        await getLeave(parmas,req.cookies.userid);
        res.send('ok');
    }catch (err){
        console.log(err.message)
    }
});

module.exports = router;