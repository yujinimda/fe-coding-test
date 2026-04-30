# [Day46] ▲ ▲ Next.js 쇼핑몰 상품 페이지의 동적 SEO 구현

**카테고리:** ▲ Next.js
**난이도:** 🟡 Medium
**제한 시간:** 15분

---

## 문제

쇼핑몰 상품 페이지에서 상품 정보를 기반으로 SEO 메타데이터를 동적으로 생성하는 함수를 작성하세요. 상품의 이름과 설명을 활용하여 메타데이터를 구성합니다.

## 코드

```typescript
const products = [
  { id: 1, name: 'Wireless Headphones', description: 'High quality wireless headphones with noise cancellation.' },
  { id: 2, name: 'Smart Watch', description: 'Feature-rich smart watch with health tracking.' },
];

// TODO: 여기에 구현하세요
function generateMetadata(productId) {
}
```

## 요구사항

1. 상품 ID를 입력받아 해당 상품의 메타데이터를 생성해야 합니다.
2. 메타데이터에는 'title'과 'description' 필드가 포함되어야 합니다.
3. 'title'은 '상품 이름 - 쇼핑몰 이름' 형식으로 구성합니다.
4. 'description'은 상품의 설명을 그대로 사용합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

상품 ID로 해당 상품을 찾아 메타데이터 객체를 구성하세요.

</details>
