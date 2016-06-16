var mysql = require("mysql");
var inquirer = require('inquirer');

var con = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "redflint1",
   database: "bamazon_db"

});

con.connect(function(err) {
   if (err) {
       console.log('Error connecting to Db');
       return;
   }
   console.log('Connection established');
});