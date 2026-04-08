interface Product {
  id: number;
  name: string;
  price: number;
}

interface Category {
  id: number;
  name: string;
  products: Product[];
}

const categories: Category[] = [
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

function renderCategoryPage(categoryId: number): Product[] {
  const category = categories.find((c) => c.id === categoryId);
  return category ? category.products : [];
}

function renderProductPage(productId: number): Product | null {
  const product = categories
    .flatMap((c) => c.products)
    .find((p) => p.id === productId);

  return product || null;
}

// TEST
console.log(renderCategoryPage(1));
console.log(renderCategoryPage(3));
console.log(renderProductPage(102));
console.log(renderProductPage(203));
