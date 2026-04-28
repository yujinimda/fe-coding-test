# [Day44] 🔷 🔷 TypeScript 🔷 쇼핑몰 상품 필터링 기능 구현

**카테고리:** 🔷 TypeScript
**난이도:** 🟡 Medium
**제한 시간:** 15분

---

## 문제

쇼핑몰에서 사용자가 원하는 조건에 맞는 상품을 필터링할 수 있는 기능을 구현하세요. 상품 데이터는 이미 제공되어 있으며, 특정 조건에 맞는 상품만을 반환하는 함수를 작성해야 합니다.

## 코드

```typescript
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
}

const products: Product[] = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 1500, inStock: true },
  { id: 2, name: 'Shoes', category: 'Fashion', price: 80, inStock: false },
  { id: 3, name: 'Watch', category: 'Accessories', price: 200, inStock: true },
  { id: 4, name: 'Phone', category: 'Electronics', price: 800, inStock: true },
  { id: 5, name: 'Jacket', category: 'Fashion', price: 120, inStock: false }
];

interface FilterCriteria {
  category?: string;
  maxPrice?: number;
  inStockOnly?: boolean;
}

// TODO: 여기에 구현하세요
function filterProducts(products: Product[], criteria: FilterCriteria): Product[] {
  
}
```

## 요구사항

1. 카테고리(category)가 주어진 경우 해당 카테고리에 속하는 상품만 반환해야 합니다.
2. 최대 가격(maxPrice)이 주어진 경우 해당 가격 이하의 상품만 반환해야 합니다.
3. 재고가 있는 상품만(inStockOnly)이 true인 경우 재고가 있는 상품만 반환해야 합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

Array.prototype.filter 메서드를 활용하여 조건에 맞는 상품을 필터링하세요.

</details>
