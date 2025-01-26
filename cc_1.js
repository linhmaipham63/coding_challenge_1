//Task 1: Variables
let employeeName = "Linh";
const employeeID = 1202;
var isActive = true; 
console.log("Employee Name:",employeeName, "- Type:", typeof employeeName); 
console.log("Employee ID:",employeeID, "- Type:", typeof employeeID);
console.log("Is Active?",isActive, "- Type:", typeof isActive);

//Task 2: Primitive Data Types
let productName = "Ice cream"; 
const productPrice = 4.57;
var isAvailable = true;
console.log(`Product Name: ${productName} - Type: ${typeof productName}`);
console.log(`Product Price: $${productPrice} - Type: ${typeof productPrice}`);
console.log(`Is Available? ${isAvailable} - Type: ${typeof isAvailable}`);

//Task 3: Number Data Type
let accountBalance = 23000;  
accountBalance += 5000;  
accountBalance = (accountBalance*2)/4 -2000;
console.log(`Updated account balance: $${accountBalance}`);

//Task 4: String Data Type
let customerName = "Le"
console.log("Welcome ".concat(customerName))

//Task 5: Boolean Data Type
let isLoggedIn = true
let hasPermission = false
console.log(`Full access: ${isLoggedIn && hasPermission}`)
console.log(`Partial access: ${isLoggedIn || hasPermission}`)
console.log(`Denied access: ${!hasPermission}`)