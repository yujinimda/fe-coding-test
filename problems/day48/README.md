# [Day48] ▲ Next.js 동적 라우팅과 params 타입 처리

**카테고리:** ▲ Next.js
**난이도:** 🟢 Easy
**제한 시간:** 15분

---

## 문제

쇼핑몰의 제품 상세 페이지에서 동적 라우팅을 구현하고, URL의 params를 기반으로 제품 정보를 가져오는 함수를 작성하세요.

## 코드

```typescript
const products = [
  { id: '1', name: 'Laptop', price: 1500 },
  { id: '2', name: 'Smartphone', price: 800 },
  { id: '3', name: 'Tablet', price: 600 }
];

// TODO: 여기에 구현하세요
function getProductById(params) {
}
```

## 요구사항

1. params 객체에서 id를 추출하여 해당 id의 제품 정보를 반환해야 합니다.
2. id에 해당하는 제품이 없을 경우 null을 반환해야 합니다.
3. params 객체의 구조는 { id: string } 형태입니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

params 객체에서 id를 추출한 후, products 배열에서 해당 id를 가진 제품을 찾으세요.

</details>
