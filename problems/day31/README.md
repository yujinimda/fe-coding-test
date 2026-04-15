# [Day31] 🧩 🧩 알고리즘: 쇼핑몰 할인 계산기 구현

**카테고리:** 🧩 알고리즘
**난이도:** 🟡 Medium
**제한 시간:** 20분

---

## 문제

쇼핑몰에서 특정 조건에 따라 할인된 가격을 계산하는 함수를 작성하세요. 이 함수는 재귀와 메모이제이션을 활용하여 최적의 성능을 보장해야 합니다.

## 코드

```typescript
const products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Phone', price: 500 },
  { id: 3, name: 'Tablet', price: 300 }
];

const discounts = [
  { productId: 1, discount: 0.1 }, // 10% 할인
  { productId: 2, discount: 0.2 }, // 20% 할인
  { productId: 3, discount: 0.15 } // 15% 할인
];

// TODO: 여기에 구현하세요
function calculateDiscountedPrice(productId, memo = {}) {
}
```

## 요구사항

1. 재귀를 사용하여 할인된 가격을 계산하세요.
2. 메모이제이션을 사용하여 이미 계산된 결과를 저장하고 재사용하세요.
3. 할인 정보가 없는 제품은 원래 가격을 반환하세요.
4. 제품 ID를 기반으로 할인된 가격을 계산하세요.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

재귀 호출 시 메모 객체를 활용하여 이미 계산된 결과를 저장하고, 이후 호출 시 이를 재사용하세요.

</details>
