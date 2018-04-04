//获取单个用户信息
async function finduser(params) {
    var a = await sql.db_mysql('SELECT * FROM info WHERE userid = ?',[params]);
    return a;
}

//编辑单个用户信息
async function edituser(id,params) {
    var a = await sql.db_mysql('UPDATE info SET username=?,phone=?,address=? WHERE userid=?',[params.username,params.phone,params.address,id]);
    return a;
}
    
module.exports ={
    finduser:finduser,
    edituser:edituser
}