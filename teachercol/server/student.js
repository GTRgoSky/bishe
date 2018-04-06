//获取学生信息
async function getStudent(id) {
    var str = 'SELECT * FROM `student` WHERE userid = ?';
    var a = await sql.db_mysql(str,[id]);
    let arr = a.map(ele=>{
        ele.ifbiye = ele.ifbiye == 1 ? '已毕业' : '未毕业';
        return ele;
    })
    return arr;
}

async function selStudent(id,type) {
    if(type == 2){
        var str = 'SELECT * FROM `student` WHERE userid = ?';
        var a = await sql.db_mysql(str,[id]);
    } else{
        var str = 'SELECT * FROM `student` WHERE userid = ? AND ifbiye = ?';
        var a = await sql.db_mysql(str,[id,type]);
    }
    let arr = a.map(ele=>{
        ele.ifbiye = ele.ifbiye == 1 ? '已毕业' : '未毕业';
        return ele;
    })
    return arr;
}
    
module.exports ={
    getstudent:getStudent,
    selstudent:selStudent
}