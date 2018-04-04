var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    connectionLimit: 10,
    port: '3306',
    database: 'teachercol',//teacher
    user: 'root',
    password: 'root'//0000
});
exports.db_mysql = function (sql, val) {
    return new Promise(function (resolve, reject) {
        pool.getConnection(function (err, connection) {
            err ? reject(err) : connection.query(sql, val, function (err, data) {
                err ? reject(err) : resolve(data);
                connection.release();
            });
        })
    })
};

