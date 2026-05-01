# [Day47] ▲ Next.js SSR에서 데이터 프리패칭 구현

**카테고리:** ▲ Next.js
**난이도:** 🟢 Easy
**제한 시간:** 15분

---

## 문제

Next.js 프로젝트에서 서버 사이드 렌더링(SSR) 시 특정 데이터를 미리 가져오는 함수를 작성하세요. 이 함수는 주어진 상품 ID를 기반으로 상품 정보를 가져와야 합니다.

## 코드

```typescript
const products = [
  { id: 1, name: 'Laptop', price: 1500 },
  { id: 2, name: 'Smartphone', price: 800 },
  { id: 3, name: 'Tablet', price: 600 }
];

// TODO: 여기에 구현하세요
function fetchProductData(productId) {
}
```

## 요구사항

1. 주어진 상품 ID에 해당하는 상품 정보를 반환해야 합니다.
2. 상품 정보는 products 배열에서 찾아야 합니다.
3. 상품 ID가 존재하지 않으면 null을 반환해야 합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

products 배열에서 find 메서드를 사용하여 상품을 검색하세요.

</details>
