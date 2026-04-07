# [Day23] ▲ ▲ Next.js 병렬 라우트 활용: 쇼핑몰 카테고리 및 제품 페이지 구현

**카테고리:** ▲ Next.js
**난이도:** 🟢 Easy
**제한 시간:** 15분

---

## 문제

Next.js의 병렬 라우트를 활용하여 쇼핑몰의 카테고리 페이지와 제품 상세 페이지를 구현하세요. 각 카테고리에는 여러 제품이 포함되어 있으며, 사용자가 카테고리를 선택하면 해당 카테고리의 제품 목록이 표시됩니다.

## 코드

```typescript
const categories = [
  { id: 1, name: 'Electronics', products: [
    { id: 101, name: 'Laptop', price: 1500 },
    { id: 102, name: 'Smartphone', price: 800 }
  ]},
  { id: 2, name: 'Home Appliances', products: [
    { id: 201, name: 'Refrigerator', price: 1200 },
    { id: 202, name: 'Washing Machine', price: 700 }
  ]}
];

// TODO: 여기에 구현하세요
function renderCategoryPage(categoryId) {
}

function renderProductPage(productId) {
}
```

## 요구사항

1. renderCategoryPage 함수는 주어진 카테고리 ID에 해당하는 제품 목록을 반환해야 합니다.
2. renderProductPage 함수는 주어진 제품 ID에 해당하는 제품 정보를 반환해야 합니다.
3. 카테고리와 제품 정보는 제공된 categories 배열에서 가져와야 합니다.
4. 유효하지 않은 ID가 주어지면 빈 배열 또는 null을 반환해야 합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

카테고리 ID로 categories 배열을 필터링하고, 제품 ID로 해당 카테고리의 products 배열을 필터링하세요.

</details>
