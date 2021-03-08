class Product {
    constructor(id, name, categoryID, saleDate, quantity,isDelete = false) {
        this.id = id;
        this.name = name;
        this.categoryID = categoryID;
        this.saleDate = saleDate;
        this.quantity = quantity;
        this.isDelete = isDelete;
    }

    setIsDelete() {
        this.isDelete = true;
    }
}
module.exports = Product;

