# [Day39] 🔷 🔷 TypeScript 쇼핑몰 주문 상태 모델링

**카테고리:** 🔷 TypeScript
**난이도:** 🟡 Medium
**제한 시간:** 15분

---

## 문제

쇼핑몰에서 주문의 상태를 모델링하기 위해 discriminated union을 사용하여 타입을 정의하세요. 각 주문은 'pending', 'shipped', 'delivered', 'cancelled' 중 하나의 상태를 가질 수 있습니다. 각 상태에 따라 추가적인 정보를 포함할 수 있습니다.

## 코드

```typescript
type OrderStatus = 
  | { status: 'pending'; estimatedDelivery: Date }
  | { status: 'shipped'; trackingNumber: string }
  | { status: 'delivered'; deliveryDate: Date }
  | { status: 'cancelled'; reason: string };

const orders: OrderStatus[] = [
  { status: 'pending', estimatedDelivery: new Date('2023-11-01') },
  { status: 'shipped', trackingNumber: '123-456-789' },
  { status: 'delivered', deliveryDate: new Date('2023-10-20') },
  { status: 'cancelled', reason: 'Customer request' }
];

// TODO: 여기에 구현하세요
function getOrderDetails(order: OrderStatus): string {
}
```

## 요구사항

1. 각 주문 상태에 따라 적절한 정보를 포함해야 한다.
2. 'pending' 상태는 예상 배송일을 포함해야 한다.
3. 'shipped' 상태는 추적 번호를 포함해야 한다.
4. 'delivered' 상태는 실제 배송일을 포함해야 한다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

각 상태에 따라 다른 정보를 반환하도록 조건문을 사용하세요.

</details>
