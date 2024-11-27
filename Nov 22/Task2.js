const products = [
    { name: "Laptop", category: "Electronics", price: 800 },
    { name: "Shirt", category: "Clothing", price: 25 },
    { name: "Smartphone", category: "Electronics", price: 600 },
    { name: "Jeans", category: "Clothing", price: 50 }
  ];
//to show only electronics item
  console.log(products.filter(item => item.category === "Electronics"));



  

  //  To find the product with the highest price 
let highestPricedProduct = products[0]; 

products.forEach(function(item) {
  if (item.price > highestPricedProduct.price) {
    highestPricedProduct = item; 
  }
});

console.log("Product with the highest price:", highestPricedProduct);


 

//to update the price of smartphone to 650

  products.forEach(function(item) {
    if (item.name === "Smartphone") {
      item.price = 650;
    }
  });
  console.log("Updated products list:", products);

