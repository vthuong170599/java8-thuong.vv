const Product = require('./Product.js');

// create 10 product
function createProduct() {
    let product = []
    let date = new Date();
    for (let i = 1; i <= 10; i++) {
        let categoryID = Math.floor((Math.random() * 10) + 1);
        let quantity = Math.floor((Math.random() * 100) + 1);
        product[i] = new Product(i, 'product ' + i, categoryID, date, quantity);
    }
    return product;
}

// console.log(createProduct());

module.exports = createProduct();