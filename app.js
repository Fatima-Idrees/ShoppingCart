console.log("Welcome to Our Shop!");

let itemName = prompt("Enter the name of the item you are buying:");
let itemPrice = parseFloat(prompt("Enter the price of the item:"));
let itemQuantity = parseInt(prompt("Enter the quantity you are purchasing:"));
let subtotal = itemPrice * itemQuantity;

console.log(`You are buying ${itemQuantity} ${itemName}(s) at $${itemPrice} each.`);
console.log(`Your subtotal is: $${subtotal}`);