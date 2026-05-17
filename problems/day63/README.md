# [Day63] 🧩 🧩 알고리즘: 해시맵을 활용한 상품 구매 빈도 계산

**카테고리:** 🧩 알고리즘
**난이도:** 🟡 Medium
**제한 시간:** 20분

---

## 문제

쇼핑몰에서 고객들이 구매한 상품 목록이 주어졌을 때, 각 상품이 몇 번 구매되었는지 계산하는 함수를 작성하세요. 이 함수는 해시맵을 사용하여 각 상품의 구매 빈도를 계산해야 합니다.

## 코드

```typescript
const purchases = [
  { customerId: 1, product: 'Laptop' },
  { customerId: 2, product: 'Mouse' },
  { customerId: 1, product: 'Laptop' },
  { customerId: 3, product: 'Keyboard' },
  { customerId: 2, product: 'Mouse' },
  { customerId: 3, product: 'Laptop' },
];

// TODO: 여기에 구현하세요
function calculateProductFrequency(purchases) {
}
```

## 요구사항

1. 해시맵을 사용하여 각 상품의 구매 빈도를 계산해야 합니다.
2. 반환 값은 각 상품의 이름과 구매 횟수를 포함하는 객체여야 합니다.
3. 구매 목록이 비어 있을 경우, 빈 객체를 반환해야 합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

해시맵을 사용하여 각 상품의 구매 횟수를 누적하세요.

</details>
