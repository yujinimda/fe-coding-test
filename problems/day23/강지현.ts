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
  // flatMap을 사용하면 함수가 호출될 때마다 모든 카테고리의 제품을 포함하는 새로운 배열을 생성
  // 데이터 규모가 커질 경우 불필요한 메모리 할당을 발생시켜 성능에 영향
  // 반복문을 통해 조건에 맞는 제품을 찾는 즉시 반환(Early Return)하도록 개선하여 효율성을 높임.
  for (const category of categories) {
    const product = category.products.find((p) => p.id === productId);
    if (product) return product;
  }

  return null;
}

// TEST
console.log(renderCategoryPage(1));
console.log(renderCategoryPage(3));
console.log(renderProductPage(102));
console.log(renderProductPage(203));
