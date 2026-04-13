# [Day29] ▲ ▲ Next.js 쇼핑몰 주문 API 설계

**카테고리:** ▲ Next.js
**난이도:** 🟡 Medium
**제한 시간:** 15분

---

## 문제

쇼핑몰의 주문 데이터를 관리하는 API를 설계하세요. 이 API는 주문 목록을 필터링하고, 특정 조건에 맞는 주문의 총 금액을 계산하는 기능을 제공합니다.

## 코드

```typescript
const orders = [
  { id: 1, product: 'Laptop', price: 1200, quantity: 2, status: 'delivered' },
  { id: 2, product: 'Mouse', price: 25, quantity: 5, status: 'pending' },
  { id: 3, product: 'Keyboard', price: 75, quantity: 3, status: 'delivered' },
  { id: 4, product: 'Monitor', price: 300, quantity: 1, status: 'cancelled' },
];

// TODO: 여기에 구현하세요
function calculateDeliveredOrdersTotal(orders) {
}
```

## 요구사항

1. 주문 상태가 'delivered'인 주문만 필터링해야 합니다.
2. 필터링된 주문의 총 금액을 계산해야 합니다.
3. 총 금액은 각 주문의 가격과 수량을 곱한 값의 합계입니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

Array의 filter와 reduce 메서드를 활용하세요.

</details>
