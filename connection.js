var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "edo4plet5mhv93s3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "zj0j4fzc83ugmgt8",
    password: "u35ujtuzw9irrlwe", // add your local password here.
    database: "cv921igp88038d8d" // add your db name here
  });
}

connection.config.typeCast = function(field, next) {
  if (field.type == "TINY" && field.length == 1) {
    return field.string() == "1"; // 1 = true, 0 = false
  }
  return next();
};


module.exports = connection;