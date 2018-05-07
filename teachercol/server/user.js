//查询用户表
//登录
async function login(params) {
    var a = await sql.db_mysql('SELECT * FROM user WHERE usernum = ? and password = ?',[params.usernum,params.password]);
    return a;
}
//判断用户是否登录
async function isLogin(params) {
    var a = await sql.db_mysql('SELECT * FROM user WHERE userid = ?',[params]);
    return a;
}

async function changePass(old,pass,id){
    var a = await sql.db_mysql('SELECT * FROM user WHERE userid = ?',[id]);
    if(a[0].password == old){
        await sql.db_mysql('UPDATE user SET password=? WHERE userid=?',[pass,id]);
        return true;
    }else{
        return false;
    }
    // 
}

module.exports ={
    login:login,
    isLogin:isLogin,
    changePass:changePass
}