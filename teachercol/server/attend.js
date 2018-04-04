//考勤表获取信心
async function selectAttend(params) {
    var a = await sql.db_mysql('SELECT * FROM attend WHERE userid = ? ORDER BY date ASC',[params]);
    return a;
}

//分页获取
async function pageAttend(id,start,end) {
    var a = await sql.db_mysql('SELECT * FROM attend WHERE userid = ? ORDER BY date ASC limit ?,?',[id,start,end]);
    return a;
}

//申诉
async function shensu(id,reason) {
    await sql.db_mysql('UPDATE attend SET ifallday=2,shensu=? WHERE attendid=?',[reason,id]);
    return 'ok';
}
    
module.exports ={
    selectAttend:selectAttend,
    pageAttend:pageAttend,
    shensu:shensu
}