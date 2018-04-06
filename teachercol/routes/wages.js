var {router,express} = require("./common.js");
var {isLogin} = require("../server/user.js");
let {selectgz} = require('../server/wages.js');

/* GET  page. */
router.get('/wages', async function(req, res, next) {
    try {
        var loginInfo = [{}];
        let date = new Date();
        let year = date.getFullYear()
        let month = (date.getMonth()+1).toString().padStart(2,0);
        let Time = year + '-' + month;
        if(req.cookies.userid) {
            loginInfo = await isLogin(req.cookies.userid);
            var userid = loginInfo[0].userid;
            let selectGz = await selectgz(userid,Time);
            res.render('wages',{userInfo : loginInfo[0],selectGz:JSON.stringify(selectGz)});
        }else{
            res.redirect('/');
        }
    }catch (err){
        console.log(err.message)
    }
});

router.get('/getwages', async function(req, res, next) {
    try {
        var userid = req.cookies.userid;
        let time = req.query.time;
        let selectGz = await selectgz(userid,time);
        res.send(selectGz);
    }catch (err){
        console.log(err.message)
    }
});

module.exports = router;
