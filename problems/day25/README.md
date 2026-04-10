# [Day25] 🧩 🧩 알고리즘: 특정 조건에 맞는 상품 조합 찾기

**카테고리:** 🧩 알고리즘
**난이도:** 🟢 Easy
**제한 시간:** 20분

---

## 문제

쇼핑몰에서 고객이 원하는 가격 범위 내에서 구매할 수 있는 상품 조합을 찾는 함수를 작성하세요. 주어진 상품 목록과 예산을 기반으로 가능한 모든 조합을 반환해야 합니다.

## 코드

```typescript
const products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Smartphone', price: 500 },
  { id: 3, name: 'Tablet', price: 300 },
  { id: 4, name: 'Headphones', price: 100 },
  { id: 5, name: 'Smartwatch', price: 200 }
];

// TODO: 여기에 구현하세요
function findProductCombinations(products, budget) {
}
```

## 요구사항

1. 주어진 예산 내에서 구매 가능한 모든 상품 조합을 찾아야 합니다.
2. 각 상품 조합의 총 가격은 예산을 초과해서는 안 됩니다.
3. 상품 조합은 중복될 수 없습니다.
4. 빈 배열을 반환할 수 있습니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

재귀적으로 가능한 모든 조합을 탐색하고, 각 조합의 총 가격을 계산하여 예산을 초과하지 않는 조합만 필터링하세요.

</details>
