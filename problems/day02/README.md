# [Day02] 🔷 재사용 가능한 타입 만들기

**카테고리:** 🔷 TypeScript
**난이도:** 🟡 Medium
**제한 시간:** 15분

---

## 문제

주어진 주문 데이터는 쇼핑몰의 주문 정보를 나타냅니다. 이를 기반으로 제네릭을 활용하여 특정 키의 값을 변경할 수 있는 타입을 만들어 보세요. 사용자가 원하는 키에 대해 새로운 값의 타입을 적용할 수 있어야 합니다.

## 코드

```typescript
type Order = {
    id: number;
    product: string;
    quantity: number;
    price: number;
};

const orders: Order[] = [
    { id: 1, product: 'Laptop', quantity: 1, price: 1500 },
    { id: 2, product: 'Mouse', quantity: 2, price: 25 },
    { id: 3, product: 'Keyboard', quantity: 1, price: 50 }
];

// 여기서 GenericTypes를 사용하여 특정 키의 값을 변경하는 함수를 정의하세요.

function updateOrder<T extends keyof Order>(
    orders: Order[],
    orderId: number,
    key: T,
    value: Order[T]
): Order[] {
    return orders.map(order => {
        if (order.id === orderId) {
            return { ...order, [key]: value };
        }
        return order;
    });
}
```

## 요구사항

1. 주어진 orders 배열에서 특정 주문(주문 ID) 의 product 값을 변경할 수 있어야 합니다.
2. 주어진 orders 배열에서 특정 주문의 quantity 값을 변경할 수 있어야 합니다.
3. 주어진 orders 배열에서 특정 주문의 price 값을 변경할 수 있어야 합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

updateOrder 함수를 사용하여 주문 정보를 업데이트하세요.

</details>
