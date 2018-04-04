//查询用户表
//查询课表
async function selectClass(params) {
    var a = await sql.db_mysql('SELECT * FROM class WHERE userid = ?',[params]);
    return a;
}

async function editClass(params,id) {
    var d = {msg:"ok"}
    try{
        JSON.parse(params.arr).forEach(async function(itemd){
            var a = false
            if(itemd.classname == '高等数学a') console.log(1)
            JSON.parse(params.oldarr).forEach(function(childitem){
                if(childitem.userid == id && childitem.date == itemd.date) return a = true;
            })
            if(a){
                //存在更新
                var ar = [itemd.date,itemd.classname,itemd.starttime,itemd.endtime,itemd.address,itemd.student,itemd.date];
                var b = await sql.db_mysql('UPDATE class SET date=?,classname=?,starttime=?,endtime=?,address=?,student=? WHERE date=?',ar);
            }else{
                //不存在插入
                var ar = [itemd.date,itemd.classname,itemd.starttime,itemd.endtime,itemd.address,itemd.student,id];
                var c = await sql.db_mysql('insert into class(date,classname,starttime,endtime,address,student,userid) values(?,?,?,?,?,?,?)',ar);
            }
        });
 
    }catch(e){
        d.msg = e
    }
    return d; 
}
module.exports ={
    selectClass:selectClass,
    editClass:editClass
}