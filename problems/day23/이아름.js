const categories = [
  {
    id: 1,
    name: "Electronics",
    products: [
      { id: 101, name: "Laptop", price: 1500 },
      { id: 102, name: "Smartphone", price: 800 },
    ],
  },
  {
    id: 2,
    name: "Home Appliances",
    products: [
      { id: 201, name: "Refrigerator", price: 1200 },
      { id: 202, name: "Washing Machine", price: 700 },
    ],
  },
];

// TODO: 여기에 구현하세요
function renderCategoryPage(categoryId) {
  for (const category of categories) {
    if (category.id === categoryId) {
      return category.products;
    }
  }

  return [];
}

function renderProductPage(productId) {
  for (const category of categories) {
    const product = category.products.find((p) => p.id === productId);

    if (product) {
      return product;
    }
  }

  return null;
}

console.log(renderCategoryPage(categories[0].id));
console.log(renderCategoryPage(3));
console.log(renderProductPage(categories[0].products[0].id));
console.log(renderProductPage(203));
