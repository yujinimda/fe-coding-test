# [Day19] ⚡ ⚡ JavaScript 쇼핑몰 주문 데이터 분석 함수 구현

**카테고리:** ⚡ JavaScript
**난이도:** 🟢 Easy
**제한 시간:** 15분

---

## 문제

쇼핑몰의 주문 데이터를 분석하는 함수를 구현하세요. 주어진 주문 데이터 배열을 기반으로 특정 조건에 맞는 주문을 필터링하고, 총 주문 금액을 계산하는 함수를 작성합니다.

## 코드

```typescript
const orders = [
  { id: 1, product: 'Laptop', price: 1200, quantity: 2, status: 'delivered' },
  { id: 2, product: 'Mouse', price: 25, quantity: 5, status: 'pending' },
  { id: 3, product: 'Keyboard', price: 75, quantity: 3, status: 'delivered' },
  { id: 4, product: 'Monitor', price: 300, quantity: 1, status: 'delivered' },
  { id: 5, product: 'USB Cable', price: 10, quantity: 10, status: 'pending' }
];

// TODO: 여기에 구현하세요
function calculateTotalDeliveredRevenue(orders) {
}
```

## 요구사항

1. 주문 상태가 'delivered'인 주문만 필터링해야 합니다.
2. 필터링된 주문의 총 금액을 계산해야 합니다.
3. 총 금액은 각 주문의 가격과 수량을 곱한 값의 합으로 계산합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

filter 메서드를 사용하여 'delivered' 상태의 주문만 남기고, reduce 메서드를 사용하여 총 금액을 계산하세요.

</details>
