# [Day13] 🔷 쇼핑몰 주문 상태에 따른 타입 변환

**카테고리:** 🔷 TypeScript
**난이도:** 🟡 Medium
**제한 시간:** 15분

---

## 문제

쇼핑몰 주문 데이터를 기반으로 주문 상태에 따라 타입을 변환하는 mapped type을 작성하세요. 각 주문은 상태에 따라 다른 속성을 가질 수 있습니다.

## 코드

```typescript
type OrderStatus = 'pending' | 'shipped' | 'delivered';

interface Order {
  id: number;
  product: string;
  price: number;
  quantity: number;
  status: OrderStatus;
}

const orders: Order[] = [
  { id: 1, product: 'Laptop', price: 1200, quantity: 2, status: 'delivered' },
  { id: 2, product: 'Mouse', price: 25, quantity: 5, status: 'pending' },
  { id: 3, product: 'Keyboard', price: 75, quantity: 3, status: 'shipped' }
];

// TODO: 여기에 구현하세요
type OrderDetails<T extends OrderStatus> = any;

function getOrderDetails<T extends OrderStatus>(orders: Order[], status: T): OrderDetails<T>[] {
  // TODO: 여기에 구현하세요
  return [];
}
```

## 요구사항

1. OrderStatus 타입은 'pending', 'shipped', 'delivered' 중 하나여야 합니다.
2. OrderDetails 타입은 주문 상태에 따라 다른 속성을 가져야 합니다.
3. getOrderDetails 함수는 주어진 상태에 맞는 주문의 상세 정보를 반환해야 합니다.
4. mapped type을 사용하여 OrderDetails 타입을 정의하세요.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

mapped type을 사용하여 각 상태에 따라 다른 속성을 가지도록 OrderDetails 타입을 정의하세요.

</details>
