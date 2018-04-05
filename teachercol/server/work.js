//获取工作饱和量
async function workTJ(params) {
    var a = await sql.db_mysql('SELECT * FROM `class` WHERE userid = ?',[params.id]);
    let arr = a.filter(ele=>{
        return levelDate(params.startTime,ele.date) && levelDate(ele.date,params.endTime)
    });
    let length = arr.length
    let obj ={};
    obj.studentNumA = length * 45;//学生总人数
    obj.clasTimeA = length * 2 ;//课时总量
    let objArry = [];
    obj.clasTypeA = new Set(arr.map(ele=>{
        let o = {};
        o.studentNum = 45 ;
        o.clasTime = ele.classname;
        o.clasType = ele.student;
        objArry.push(o)
        return ele.student;
    })).size || 3;//查询class的不同student的种类
    let day = GetDateDiff(params.startTime,params.endTime);
    obj.bhA = ((length * 90) / (day * 180) * 100).toFixed(2) + '%';
    objArry.push(obj);
    return objArry;
}

//Js 时间间隔计算(间隔天数)
function GetDateDiff(startDate,endDate)  
{  
    var startTime = new Date(Date.parse(startDate.replace(/-/g,   "/"))).getTime();     
    var endTime = new Date(Date.parse(endDate.replace(/-/g,   "/"))).getTime();     
    var dates = Math.abs((startTime - endTime))/(1000*60*60*24);     
    return  dates;    
}

//比较日期大小
function levelDate(s,l){
    return s <= l ? true : false
}

module.exports ={
    worktj:workTJ
}


// 带领班级数量 查询class的不同student的种类
// 课时总量统计 查询class的总量（按时间分）
// 学生总人数   每个class按照45人计算
// 工作量饱和度 计算公式：每天按照2个课时每课时2小时45人次。180分