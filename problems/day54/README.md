# [Day54] 🧩 🧩 알고리즘: 쇼핑몰 재고 관리 시스템 구현

**카테고리:** 🧩 알고리즘
**난이도:** 🟢 Easy
**제한 시간:** 20분

---

## 문제

쇼핑몰에서 상품의 재고를 관리하는 시스템을 구현하려고 합니다. 주어진 상품 목록에서 특정 상품의 재고 수량을 이진 탐색을 활용하여 빠르게 찾는 함수를 작성하세요.

## 코드

```typescript
const products = [
  { id: 1, name: 'Laptop', stock: 30 },
  { id: 2, name: 'Mouse', stock: 100 },
  { id: 3, name: 'Keyboard', stock: 50 },
  { id: 4, name: 'Monitor', stock: 20 },
  { id: 5, name: 'Printer', stock: 10 },
];

// TODO: 여기에 구현하세요
function findStockById(products, productId) {
  // 이진 탐색을 활용하여 productId에 해당하는 상품의 재고를 반환하세요
}
```

## 요구사항

1. 상품 목록은 id 기준으로 정렬되어 있다고 가정합니다.
2. 이진 탐색을 사용하여 특정 상품의 재고를 찾아야 합니다.
3. 상품이 존재하지 않으면 -1을 반환해야 합니다.
4. 함수는 products 배열과 productId를 매개변수로 받아야 합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

이진 탐색 알고리즘을 사용하여 상품의 id를 기준으로 탐색하세요.

</details>
