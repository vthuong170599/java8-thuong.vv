const createProduct = require('./ListProduct');
// use ES6
function isHaveProductInCategoryES6(listProduct, categoryID) {
    return listProduct.find(product => !product.isDelete && product.CategoryID === categoryID) ? true : false;
}
console.log(createProduct);
console.log(isHaveProductInCategoryES6(createProduct,3));

// use normal
function isHaveProductInCategory(listProduct,CategoryID){
    let count = listProduct.length;
    for (let i = 1; i <= count; i++) {
       if(listProduct[i].categoryID === CategoryID){
           return true;
       }
    }
    return false;
}

// console.log(isHaveProductInCategory(createProduct,3));