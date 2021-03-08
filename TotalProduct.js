const createProduct = require('./ListProduct');

// use reduce
let totalProductES6 = (listProduct) => {
    let total = 0;
    return listProduct.reduce((total, product) => {
        if (!product.isDelete) {
            return total += product.quantity;
        } else {
            return total;
        }
    }, total);
}

// console.log(createProduct);
// console.log(totalProductES6(createProduct));

// use normal
function TotalProduct(listProduct) {
    let total = 0;
    let count = listProduct.length;
    for (let i = 1; i < count; i++) {
       if(!listProduct[i].isDelete){
           total+= listProduct[i].quantity;
       }
    }
    return total;
}
console.log(createProduct);
console.log(TotalProduct(createProduct));