//获取论文表的信息
async function selectThesis(params) {
    var a = await sql.db_mysql('SELECT * FROM `thesis` WHERE userid = ? ',[params]);
    return a;
}
    
module.exports ={
    findthesis:selectThesis
}