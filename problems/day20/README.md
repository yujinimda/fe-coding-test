# [Day20] ▲ ▲ Next.js 상품 목록 캐싱 전략 구현

**카테고리:** ▲ Next.js
**난이도:** 🟡 Medium
**제한 시간:** 15분

---

## 문제

쇼핑몰의 상품 목록을 효율적으로 제공하기 위해 캐싱 전략을 구현하세요. 상품 목록은 주기적으로 갱신되어야 하며, 특정 조건에서만 캐시를 무효화해야 합니다.

## 코드

```typescript
const products = [
  { id: 1, name: 'Smartphone', category: 'Electronics', updatedAt: '2023-10-01T10:00:00Z' },
  { id: 2, name: 'Coffee Maker', category: 'Home Appliances', updatedAt: '2023-10-02T12:00:00Z' },
  { id: 3, name: 'Running Shoes', category: 'Sportswear', updatedAt: '2023-10-03T14:00:00Z' },
];

// TODO: 여기에 구현하세요
function shouldRevalidate(product, lastChecked) {
}

function getCacheKey(product) {
  // TODO: 여기에 구현하세요
}
```

## 요구사항

1. 상품의 업데이트 시간이 마지막 확인 시간보다 최근일 경우 캐시를 무효화해야 합니다.
2. 상품의 카테고리를 기반으로 캐시 키를 생성해야 합니다.
3. 캐시 키는 상품의 카테고리와 상품 ID를 조합하여 생성해야 합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

상품의 업데이트 시간을 비교하여 캐시 무효화 여부를 결정하세요. 캐시 키는 문자열 조합으로 만드세요.

</details>
