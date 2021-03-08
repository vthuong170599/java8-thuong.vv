const createProduct = require('./ListProduct');
let now = new Date;
// get Product by ID foreach
function fiterProductByIdEs6(listProduct, productID) {
    let productItem;
    listProduct.forEach(product => {
        if (product.id === productID) {
            productItem = product;
        }
    });
    return productItem;
}

// get product by ID for
function fiterProductById(listProduct, productID) {
    let count = listProduct.length;
    for (let i = 1; i < count; i++) {
        if (listProduct[i].id === productID) {
            return listProduct[i];
        }
    }
}

// console.log(fiterProductById(createProduct(),2));

// Product has quantity > 0 foreach
function fiterProductbyQuantityEs6(listProduct) {
    listProduct.filter(product => product.quantity > 0 && product.isDelete == false)
    return listProduct;
}
console.log(fiterProductbyQuantityEs6(createProduct));

// product has  quantity > 0 for
function fiterProductbyQuantity(listProduct) {
    let count = listProduct.length;
    let products = [];
    for (let i = 1; i < count; i++) {
        if (listProduct[i].quantity > 0 && listProduct[i].isDelete == false) {
            products.push(listProduct[i]);
        }
    }
    return products;
}
// console.log(fiterProductbyQuantity(createProduct));

// get product by saleDate Foreach

function fiterProductBySaleDateEs6(listProduct) {
    listProduct.filter(product => product.saleDate.getTime() >= now.getTime() && product.isDelete == false)
    return listProduct;
}

// console.log(fiterProductBySaleDateEs6(createProduct));

function fiterProductBySaleDate(listProduct) {
    let count = listProduct.length;
    let products = [];
    for (let i = 1; i < count; i++) {
        if (listProduct[i].saleDate.getTime() >= (new Date).getTime() && listProduct[i].isDelete == false) {
            products.push(listProduct[i]);
        }
    }
    return products;
}

// console.log(fiterProductBySaleDate(createProduct));

