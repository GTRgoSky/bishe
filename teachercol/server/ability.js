//能力表查询
async function selectAbility(params) {
    var a = await sql.db_mysql('SELECT * FROM ability WHERE userid = ?',[params]);
    return a;
}

    
module.exports ={
    selectAbility:selectAbility
}