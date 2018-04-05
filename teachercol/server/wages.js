//获取论文表的信息
async function selectGz(id,time) {
    
    var str = 'SELECT * FROM `wages` WHERE userid = ? and time = ?';
    if(time == 'all') str = 'SELECT * FROM `wages` WHERE userid = ?';
    var a = await sql.db_mysql(str,[id,time]);
    return a;
}
    
module.exports ={
    selectgz:selectGz
}