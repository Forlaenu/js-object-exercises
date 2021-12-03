// each of the functions will be passed a user object like the one below.
// Read the documentation for each function to complete the exercises.

/**
 * @typedef Product
 * @property {string} name
 * @property {number} price
 * @property {string} color
 * @property {number} stock
 */
/**
 * @type {Product[]}
 */
const exampleProductArray = [
  {
    name: 'iPhone',
    price: 699,
    color: 'black',
    stock: 10
  },
  {
    name: 'Samsung Galaxy S10',
    price: 799,
    color: 'black',
    stock: 5
  },
  {
    name: 'Google Pixel 3',
    price: 599,
    color: 'black',
    stock: 0
  },
]

/**
 * Looping through an array of objects
 * Use the products array to loop through the array and return the sum of all prices
 * @param {Product[]} products 
 * @returns {number}
 */
function level3exercise1(products) {
  let sumPrices = 0;
  for(obj of products){
    sumPrices += obj.price;
  }
  return sumPrices;
}

/**
 * Highest priced product
 * Use the products array to loop through the array and return the name of the product with the highest price
 * @param {Product[]} products
 * @returns {string}
 */
function level3exercise2(products) {
  let highPrice = 0;
  let product = "";
  for(obj of products){
    
    if(highPrice < obj.price){
      highPrice = obj.price;
      product = obj.name;
    }
  }
  return product;
}


/**
 * Lowest priced product
 * Use the products array to loop through the array and return the name of the product with the lowest price
 * @param {Product[]} products
 * @returns {Product}
 */
function level3exercise3(products) {
  let lowPrice = 9999999999;
  let product = "";
  for(obj of products){
    if(lowPrice > obj.price){
      lowPrice = obj.price;
      product = obj.name;
    }
  }
  return product;
}

/**
 * Average price
 * Use the products array to loop through the array and return the average price of all products
 * @param {Product[]} products
 * @returns {number}
 */
function level3exercise4(products) {
  return (level3exercise1(products) / products.length)
}

/**
 * Format price and name
 * Use the products array to loop through the array and return the name and price of the product with the lowest price
 * e.g. iPhone: $499
 * @param {Product[]} products
 * @returns {string}
 */
function level3exercise5(products) {
  let productName = level3exercise3(products);
  let productPrice = 0;
  for(obj of products){
    if(obj.name === productName){
      productPrice = obj.price;
    }
  }
  return `${productName}: $${productPrice}`;
}

/**
 * Filter by stock
 * Use the products array to loop through the array and return an array of products that are in stock
 * @param {Product[]} products
 * @returns {Product[]}
 */
function level3exercise6(products) {
  let productsInStock = [];
  for(obj of products){
    if (obj.stock > 0){
      productsInStock.push(obj);
    }
  }
  return productsInStock;
}

/**
 * Filter by color
 * Use the products array to loop through the array and return an array of products that match the color parameter
 * @param {Product[]} products
 * @param {string} color
 * @returns {Product[]}
 */
function level3exercise7(products, color) {
  let productsWithColor = [];
  for(obj of products){
    if (color === obj.color){
      productsWithColor.push(obj);
    }
  }
  return productsWithColor;
}

/**
 * Format prices and names
 * Use the products array to loop through the array and return an array of strings with the name and price of each product
 * e.g. iPhone: $499
 * @param {Product[]} products
 * @returns {string}
 */
function level3exercise8(products) {
  let string = [];
  for(obj of products){
    string.push(`${obj.name}: $${obj.price}`);
  }
  return string;
}
