const productManager = {
  products: [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mouse", price: 25 },
  ],
  printProductDetails: function () {
    this.products.forEach((product) => {
      console.log(`Product: ${product.name}, Price: ${product.price}`);
    });
  },
};

productManager.printProductDetails();
