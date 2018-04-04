//考勤表获取信心
async function selectLeave(params) {
    var a = await sql.db_mysql('SELECT * FROM `leave` WHERE userid = ? ORDER BY date ASC',[params]);
    return a;
}

async function lostLeave(zt,id) {
    var a = await sql.db_mysql('UPDATE `leave` SET zhuangtai=? WHERE leaveid=?',[zt,id]);
    return 'ok';
}

async function getLeave(params,id) {
    var zt = [params.date,params.starttime,params.endtime,params.reason,parseInt(params.zhuangtai),parseInt(id)]
    var a = await sql.db_mysql('INSERT INTO `leave`(date,starttime,endtime,reason,zhuangtai,userid) VALUES(?,?,?,?,?,?)',zt);
    return 'ok';
}
    
module.exports ={
    selectLeave:selectLeave,
    lostLeave:lostLeave,
    getLeave:getLeave
}