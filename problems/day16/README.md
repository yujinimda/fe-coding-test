# [Day16] ▲ Next.js에서 generateMetadata로 동적 SEO 구현하기

**카테고리:** ▲ Next.js
**난이도:** 🟢 Easy
**제한 시간:** 15분

---

## 문제

쇼핑몰 상품 페이지에서 상품의 이름과 설명을 기반으로 SEO 메타데이터를 동적으로 생성하는 함수를 작성하세요. 이 함수는 Next.js의 generateMetadata 기능을 활용하여 상품 페이지의 메타데이터를 설정합니다.

## 코드

```typescript
const product = {
  id: 101,
  name: 'Wireless Headphones',
  description: 'High quality wireless headphones with noise cancellation',
  price: 299.99
};

// TODO: 여기에 구현하세요
function generateProductMetadata(product) {
}
```

## 요구사항

1. 상품의 이름을 메타데이터의 title로 설정해야 합니다.
2. 상품의 설명을 메타데이터의 description으로 설정해야 합니다.
3. 메타데이터는 객체 형태로 반환되어야 합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

상품 객체의 속성을 사용하여 메타데이터 객체를 구성하세요.

</details>
