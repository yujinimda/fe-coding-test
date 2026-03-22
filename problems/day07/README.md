# [Day07] 🔷 쇼핑몰 주문 상태 모델링

**카테고리:** 🔷 TypeScript
**난이도:** 🟢 Easy
**제한 시간:** 15분

---

## 문제

쇼핑몰에서 주문의 상태를 모델링하려고 합니다. 주문은 여러 가지 상태를 가질 수 있으며, 각 상태에 따라 추가적인 정보가 필요할 수 있습니다. 주어진 타입을 사용하여 주문 상태를 정확하게 표현하세요.

## 코드

```typescript
type Order = 
  | { status: 'pending'; orderId: string }
  | { status: 'shipped'; orderId: string; trackingNumber: string }
  | { status: 'delivered'; orderId: string; deliveryDate: Date }
  | { status: 'cancelled'; orderId: string; reason: string };

const orders: Order[] = [
  { status: 'pending', orderId: '123' },
  { status: 'shipped', orderId: '124', trackingNumber: 'TRACK123' },
  { status: 'delivered', orderId: '125', deliveryDate: new Date('2023-10-01') },
  { status: 'cancelled', orderId: '126', reason: 'Customer request' }
];

function getOrderDetails(order: Order): string {
  // 여기에 구현하세요
  return '';
}
```

## 요구사항

1. 주문이 'pending' 상태일 경우, 'Order is pending.'을 반환하세요.
2. 주문이 'shipped' 상태일 경우, 'Order shipped with tracking number: [trackingNumber].'을 반환하세요.
3. 주문이 'delivered' 상태일 경우, 'Order delivered on [deliveryDate].'을 반환하세요.
4. 주문이 'cancelled' 상태일 경우, 'Order cancelled due to: [reason].'을 반환하세요.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

각 상태에 따라 다른 메시지를 반환하도록 조건문을 사용하세요.

</details>
