# [Day36] ▲ ▲ Next.js 서버 액션으로 폼 데이터 처리하기

**카테고리:** ▲ Next.js
**난이도:** 🟢 Easy
**제한 시간:** 15분

---

## 문제

쇼핑몰의 관리자 페이지에서 상품 정보를 업데이트하는 폼이 있습니다. 이 폼의 데이터를 서버 액션을 통해 처리하는 함수를 작성하세요. 서버 액션은 상품의 이름과 가격을 업데이트하는 역할을 합니다.

## 코드

```typescript
const products = [
  { id: 1, name: 'Laptop', price: 1500 },
  { id: 2, name: 'Smartphone', price: 800 },
];

// TODO: 여기에 구현하세요
function updateProduct(productId, newName, newPrice) {
}
```

## 요구사항

1. 주어진 products 배열에서 특정 상품의 이름과 가격을 업데이트해야 합니다.
2. updateProduct 함수는 productId, newName, newPrice를 매개변수로 받아야 합니다.
3. productId에 해당하는 상품이 존재하지 않으면 아무 작업도 하지 않습니다.
4. 상품 정보가 성공적으로 업데이트되면 업데이트된 상품 객체를 반환합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

products 배열에서 find 메서드를 사용하여 특정 상품을 찾을 수 있습니다.

</details>
