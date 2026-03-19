# [Day04] 🔷 쇼핑몰 주문 폼 데이터 타입 설계

**카테고리:** 🔷 TypeScript
**난이도:** 🟢 Easy
**제한 시간:** 15분

---

## 문제

쇼핑몰에서 주문 폼 데이터를 관리하기 위한 타입을 설계하세요. 주문에는 고객 정보와 주문 상품 목록이 포함됩니다. 각 상품은 이름과 가격을 가지고 있습니다.

## 코드

```typescript
type Customer = {
  name: string;
  email: string;
};

// TODO: 주문 폼 데이터를 위한 타입을 정의하세요.

const orderForm = {
  customer: {
    name: "John Doe",
    email: "john.doe@example.com"
  },
  items: [
    { name: "Laptop", price: 1200 },
    { name: "Mouse", price: 25 }
  ]
};
```

## 요구사항

1. 주문 폼 데이터 타입을 정의하세요.
2. 주문 폼 데이터는 고객 정보와 상품 목록을 포함해야 합니다.
3. 고객 정보는 이름과 이메일을 포함해야 합니다.
4. 상품 목록의 각 상품은 이름과 가격을 포함해야 합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

주문 폼 데이터 타입은 고객 정보와 상품 목록을 포함하는 객체 형태로 정의하세요.

</details>
