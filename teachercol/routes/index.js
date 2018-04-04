var {router,express} = require("./common.js");
var fs=require('fs');
var {isLogin} = require("../server/user.js");
var {selectClass} = require("../server/class.js");
var superagent = require('superagent'); //这三个外部依赖不要忘记npm install
var cheerio = require('cheerio');
var eventproxy = require('eventproxy');

/* GET home page. */
router.get('/', async function(req, res, next) {
    try {
        var loginInfo = [{}];
        var classCol = [];
        if(req.cookies.userid) {
            loginInfo = await isLogin(req.cookies.userid);
            var userid = loginInfo[0].userid;
            classCol = await selectClass(userid)
        }
        res.render('index',{userInfo : loginInfo[0],classCol:JSON.stringify(classCol)});
    }catch (err){
        console.log(err.message)
    }
});

router.get('/dongtai', async function(req, res, next) {
    //抓包技术
    var loginInfo = [{}];
    if(req.cookies.userid) {
        loginInfo = await isLogin(req.cookies.userid);
        var userid = loginInfo[0].userid;
    }
    //开始爬虫 学习文档 http://www.jb51.net/article/58819.htm
    superagent.get("http://news.zua.edu.cn/xwtt1.htm")
        .end(function (err, resd) {
            if (err) {
                return console.error(err);
            }
            var $ = cheerio.load(resd.text);
            var asd = $('.picnewslist .clearfix');
            var test = ''
            for(var vvv = 0 ; vvv <10; vvv++){
                var url = $(asd[vvv]).find('a')[0].attribs.href;
                $(asd[vvv]).find('a')[0].attribs.href = 'http://news.zua.edu.cn/'+url;
                test +=$(asd[vvv]).html();
            }
            res.render('dongtai',{userInfo : loginInfo[0],aaa: test});
        });
    
});



module.exports = router;
