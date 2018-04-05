var {router,express} = require("./common.js");
var {isLogin} = require("../server/user.js");
var {worktj} = require('../server/work.js');
/* GET  page. */
router.get('/work', async function(req, res, next) {
    try {
        var loginInfo = [{}];
        var useInfo = null;
        let date = new Date();
        let year = date.getFullYear()
        let month = (date.getMonth()+1).toString().padStart(2,0);
        let startTime = year + '-' + month + '-01';
        let endTime = year + '-' + month + '-' + getLastDay(year,month);
        //默认获取当前月的统计，还可以获取当前年 和 当月+往后2个月
        if(req.query.startTime) startTime = req.query.startTime;
        if(req.query.endTime) endTime = req.query.endTime;
        if(req.cookies.userid) {
            loginInfo = await isLogin(req.cookies.userid);
            var userid = loginInfo[0].userid;
            let workTJ = await worktj({id:userid,startTime:startTime,endTime:endTime})
            res.render('work',{userInfo : loginInfo[0],workTJ:JSON.stringify(workTJ)});
        }else{
            res.redirect('/');
        }
    }catch (err){
        console.log(err.message)
    }
});

router.get('/getwork', async function(req, res, next) {
    try {
        let startTime = req.query.startTime;
        let endTime = req.query.endTime;
        //默认获取当前月的统计，还可以获取当前年 和 当月+往后2个月
        let workTJ = await worktj({id:req.cookies.userid,startTime:startTime,endTime:endTime})
        res.send({data:workTJ,msg:'ok'})
    }catch (err){
        console.log(err.message)
    }
});

module.exports = router;

//获取当前月最后一天
function getLastDay(year,month)   
{   
    var new_year = year;  //取当前的年份
    var new_month = month++;//取下一个月的第一天，方便计算（最后一天不固定）
    if(month>12)      //如果当前大于12月，则年份转到下一年
    {   
    new_month -=12;    //月份减
    new_year++;      //年份增
    }   
    var newnew_date = new Date(new_year,new_month,1);        //取当年当月中的第一天
    return (new Date(newnew_date.getTime()-1000*60*60*24)).getDate();//获取当月最后一天日期
}  