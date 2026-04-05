const products = [
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

// TODO: 여기에 구현하세요
function shouldRevalidate(product, lastChecked) {
  const updatedAt = new Date(product.updatedAt);
  const lastCheckedAt = new Date(lastChecked);

  return updatedAt > lastCheckedAt;
}

function getCacheKey(product) {
  return `${product.category}-${product.id}`;
}

const lastChecked = "2023-10-02T00:00:00Z";

products.forEach((product) => {
  const cacheKey = getCacheKey(product);
  const needsRevalidation = shouldRevalidate(product, lastChecked);

  console.log(`[${cacheKey}] 캐시 무효화 필요: ${needsRevalidation}`);
});
