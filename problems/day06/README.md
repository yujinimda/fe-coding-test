# [Day06] ▲ Next.js Route Handler에서 API 설계

**카테고리:** ▲ Next.js
**난이도:** 🟢 Easy
**제한 시간:** 15분

---

## 문제

쇼핑몰의 상품 목록을 반환하는 API를 설계하세요. 상품 데이터는 이미 주어져 있으며, 이 데이터를 기반으로 특정 카테고리의 상품만 반환하는 API를 구현해야 합니다.

## 코드

```typescript
// 상품 데이터
const products = [
  { id: 1, name: 'Laptop', category: 'electronics' },
  { id: 2, name: 'Shirt', category: 'clothing' },
  { id: 3, name: 'Coffee Maker', category: 'home appliances' },
  { id: 4, name: 'Headphones', category: 'electronics' },
  { id: 5, name: 'Jacket', category: 'clothing' }
];

// API 핸들러를 작성하세요
export default function handler(req, res) {
  const { category } = req.query;
  // TODO: 특정 카테고리의 상품만 필터링하여 반환하세요
  res.status(200).json([]);
}
```

## 요구사항

1. 주어진 상품 데이터 배열을 사용해야 합니다.
2. API 요청의 쿼리 파라미터로 전달된 카테고리에 해당하는 상품만 반환해야 합니다.
3. 쿼리 파라미터가 없는 경우 모든 상품을 반환해야 합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

filter 메서드를 사용하여 배열을 필터링하세요.

</details>
