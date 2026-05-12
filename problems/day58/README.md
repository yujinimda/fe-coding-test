# [Day58] 🔷 🔷 TypeScript 유니온 타입과 타입 가드로 안전한 분기 처리

**카테고리:** 🔷 TypeScript
**난이도:** 🟡 Medium
**제한 시간:** 15분

---

## 문제

쇼핑몰의 주문 상태에 따라 다른 메시지를 반환하는 함수를 작성하세요. 각 주문은 'pending', 'shipped', 'delivered', 'canceled' 중 하나의 상태를 가집니다. 각 상태에 맞는 메시지를 반환하도록 타입 가드를 사용하여 구현하세요.

## 코드

```typescript
type OrderStatus = 'pending' | 'shipped' | 'delivered' | 'canceled';

interface Order {
  id: number;
  status: OrderStatus;
}

const orders: Order[] = [
  { id: 1, status: 'pending' },
  { id: 2, status: 'shipped' },
  { id: 3, status: 'delivered' },
  { id: 4, status: 'canceled' },
];

function getOrderMessage(order: Order): string {
  // TODO: 여기에 구현하세요
}

orders.forEach(order => {
  console.log(`Order ${order.id}: ${getOrderMessage(order)}`);
});
```

## 요구사항

1. 주문 상태가 'pending'인 경우 'Your order is being processed.' 메시지를 반환해야 합니다.
2. 주문 상태가 'shipped'인 경우 'Your order is on the way.' 메시지를 반환해야 합니다.
3. 주문 상태가 'delivered'인 경우 'Your order has been delivered.' 메시지를 반환해야 합니다.
4. 주문 상태가 'canceled'인 경우 'Your order has been canceled.' 메시지를 반환해야 합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

타입 가드를 사용하여 각 상태에 맞는 메시지를 반환하세요.

</details>
