# [Day49] 🔷 🔷 TypeScript API 응답 타입 설계 및 any 제거

**카테고리:** 🔷 TypeScript
**난이도:** 🟡 Medium
**제한 시간:** 15분

---

## 문제

쇼핑몰에서 상품 목록을 가져오는 API의 응답 타입을 설계하고, any 타입을 제거하세요. 주어진 데이터 구조를 기반으로 타입을 정의하고, 이를 활용하여 상품의 총 가격을 계산하는 함수를 작성하세요.

## 코드

```typescript
type Product = any; // TODO: Product 타입을 정의하세요

const apiResponse = {
  products: [
    { id: 1, name: 'Laptop', price: 1200, quantity: 2 },
    { id: 2, name: 'Mouse', price: 25, quantity: 5 },
    { id: 3, name: 'Keyboard', price: 45, quantity: 3 }
  ]
};

// TODO: 여기에 구현하세요
function calculateTotalPrice(response: any): number {
  return 0; // 임시 반환값
}
```

## 요구사항

1. Product 타입을 정의하여 any를 제거하세요.
2. apiResponse의 구조에 맞게 타입을 정의하세요.
3. calculateTotalPrice 함수는 주어진 상품 목록의 총 가격을 계산해야 합니다.
4. 함수는 타입 안전성을 보장해야 합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

Product 타입을 정의할 때, API 응답의 데이터 구조를 참고하세요. calculateTotalPrice 함수에서는 map과 reduce를 활용할 수 있습니다.

</details>
