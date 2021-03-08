const createProduct = require('./ListProduct');
function fiterProductBySaleDateES6(listProduct) {
    return listProduct.filter(product => !product.isDelete &&
        product.saleDate.getTime() <= (new Date).getTime() && product.quantity > 0).map(
            product => {
                return {
                    id: product.id,
                    name: product.name
                }
            }
        )
}

// console.log(fiterProductBySaleDateES6(createProduct));

function fiterProductBySaleDate(listProduct) {
    let count = listProduct.length;
    let product = [];
    let j = 0;
    for (let i = 1; i < count; i++) {
        if (!listProduct[i].isDelete && listProduct[i].saleDate.getTime() <= (new Date).getTime() && listProduct[i].quantity > 0) {
            product[j++] = {
                id: listProduct[i].id,
                name: listProduct[i].name
            }
        }
    }
    return product;
}

console.log(fiterProductBySaleDate(createProduct));