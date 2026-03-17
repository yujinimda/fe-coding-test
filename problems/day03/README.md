# [Day03] 🔷 API 응답 타입 설계

**카테고리:** 🔷 TypeScript
**난이도:** 🟢 Easy
**제한 시간:** 15분

---

## 문제

온라인 쇼핑몰의 제품 목록 API 응답을 타입스크립트로 정의하고, any 타입을 제거하는 문제입니다. 주어진 JSON 데이터를 기반으로 타입을 설계하세요.

## 코드

```typescript
const apiResponse = {\n  products: [\n    { id: 1, name: '상품 A', price: 10000, inStock: true },\n    { id: 2, name: '상품 B', price: 15000, inStock: false }\n  ],\n  total: 2,\n  hasMore: false\n};
```

## 요구사항

1. API 응답의 타입을 정의하시오.
2. apiResponse 객체의 구조에 맞게 Product 타입, ApiResponse 타입을 설계하시오.
3. any 타입을 사용하지 않고 타입을 정의하시오.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

각 제품의 속성을 반영하여 타입을 정의하세요.

</details>
