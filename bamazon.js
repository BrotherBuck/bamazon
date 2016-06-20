

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

//Display All of the Items available for sale. This initial 
// display, should include the ids, names, and prices of products 
// for sale

//creating a constructor function to apply a series of values

function ItemsForSale(itemID, productName, departmentName, price, stockQuantity) {
    this.itemID  = itemID;
    this.productName = productName;
    this.departmentName = departmentName;
    this.price = price;
    this.stockQuantity = stockQuantity;
}

//creating individual items using the constructor function     

var frisbee = new ItemsForSale('001','frisbee','sports', 5.00, 100);
var widget = new ItemsForSale('002','widget','fantasy', 10.00, 50);
var radio = new ItemsForSale('003','radio','electronics', 20.00, 25);
var phone = new ItemsForSale('004','phone','electronics', 100.00, 15);
var fan = new ItemsForSale('005','fan','electronics', 15.00, 75);
var jsBook = new ItemsForSale('006','jsBook','learning', 35.00, 25);
var toyCar = new ItemsForSale('007','toyCar','toys', 5.00, 100);
var pen = new ItemsForSale('008','pen','stationary', 1.00, 100);
var copyPaper = new ItemsForSale('009','copyPaper','stationary', 10.00, 75);
var kite = new ItemsForSale('010','kite','toys', 10.00, 35);

	

// Users should then be prompted with two messages. The first message 
// should ask them the ID of the product they would like to buy. 
// The second message should ask them how many of the product they 
// would like to buy.
 var questions = [
        {
            type: 'list',
            name: 'itemList',
            message: 'Which item would you like to purchase?',
            choices: productList,
        },
        {

            type: 'input',
            name: 'quanity',
            message: 'Quanity?',
            validate: function (value) {
                if (isNaN(value)) {
                    return 'Please enter a valid number';
                }
                return true;
            }

        }
    ];

    inquirer.prompt(questions).then(function (answers) {
        utils.inspect.styles.string = 'blue';
        console.dir("Outstanding!", {colors: true});
        if (questions[1].answers >= 1) {
        console.log("test");
        };
    });



// Once the customer has placed the order: Your application should...
// Check if your store has enough quantity of the product to meet 
// the customer's request. If not, you should respond to the user 
// by saying: "Insufficient quantity" and prevent the order from 
// going through.
// If your store DOES have enough of the product to meet the 
// customer's request, you should fulfill their order. This means 
// that you should show them the total cost of their puchase. 
// Then update the SQL database to reflect the remaining quantity.