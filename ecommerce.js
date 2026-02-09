//You are building a shopping cart summary for an e-commerce website.
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
//Use filter() to get only inStock products
const inStockProducts = cart.filter(item => item.inStock);
console.log("In-stock products:", inStockProducts);
// Use map() to create a new array with:  { name, totalPrice }
const productTotals = cart.map(item => ({
  name: item.name,
  totalPrice: item.price * item.quantity    
}));
console.log("Product totals:", productTotals);
// Use reduce() to calculate grand total cart value+
const grandTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
console.log("Grand total cart value:", grandTotal);
//Use find() to get details of "Mouse"
const mouseDetails = cart.find(item => item.name === "Mouse");
console.log("Mouse details:", mouseDetails);
//Use findIndex() to find the position of "Keyboard"
const keyboardIndex = cart.findIndex(item => item.name === "Keyboard");
console.log("Index of 'Keyboard':", keyboardIndex);
