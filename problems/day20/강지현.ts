interface Product {
  id: number;
  name: string;
  category: string;
  updatedAt: string;
}

function shouldRevalidate(product: Product, lastChecked: string): boolean {
  // 두 시간을 비교해서 boolean 반환
  // product가 더 최근에 업데이트됐으면 → 캐시 무효화 필요 → true
  // 아니면 → false
  return new Date(product.updatedAt) > new Date(lastChecked);
}

function getCacheKey(product: Product): string {
  // 카테고리 + 상품 ID 조합
  return `${product.category}-${product.id}`;
}

// TEST
const products: Product[] = [
  {
    id: 1,
    name: "Smartphone",
    category: "Electronics",
    updatedAt: "2023-10-01T10:00:00Z",
  },
  {
    id: 2,
    name: "Coffee Maker",
    category: "Home Appliances",
    updatedAt: "2023-10-02T12:00:00Z",
  },
  {
    id: 3,
    name: "Running Shoes",
    category: "Sportswear",
    updatedAt: "2023-10-03T14:00:00Z",
  },
];

const lastChecked = "2023-10-02T00:00:00Z";

products.forEach((product) => {
  console.log(`${product.name}`);
  console.log(`캐시 키: ${getCacheKey(product)}`);
  console.log(`캐시 무효화 필요: ${shouldRevalidate(product, lastChecked)}`);
  console.log("---");
});
