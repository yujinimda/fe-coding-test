# [Day26] ▲ Next.js에서 데이터 로딩, 에러, 페이지 없음 처리하기

**카테고리:** ▲ Next.js
**난이도:** 🟢 Easy
**제한 시간:** 15분

---

## 문제

쇼핑몰의 제품 상세 페이지에서 데이터를 로딩하고, 에러가 발생하거나 제품이 없을 때 적절한 메시지를 표시하는 함수를 작성하세요.

## 코드

```typescript
const productData = {
  id: 101,
  name: 'Wireless Headphones',
  price: 150,
  available: true
};

function fetchProductData(productId) {
  // 이 함수는 실제로는 비동기 API 호출을 통해 데이터를 가져온다고 가정합니다.
  // 여기서는 간단히 데이터를 반환합니다.
  if (productId === 101) {
    return productData;
  } else if (productId === 404) {
    throw new Error('Product not found');
  } else {
    throw new Error('Unknown error');
  }
}

function renderProductPage(productId) {
  try {
    // TODO: 여기에 구현하세요
  } catch (error) {
    // TODO: 여기에 구현하세요
  }
}
```

## 요구사항

1. 제품 ID를 기반으로 데이터를 로딩하고, 로딩 중 메시지를 표시해야 합니다.
2. 제품 데이터가 성공적으로 로딩되면 제품 이름과 가격을 표시해야 합니다.
3. 제품이 존재하지 않으면 '제품을 찾을 수 없습니다' 메시지를 표시해야 합니다.
4. 알 수 없는 에러가 발생하면 '알 수 없는 에러가 발생했습니다' 메시지를 표시해야 합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

try-catch 문을 사용하여 에러를 처리하고, 조건문을 통해 로딩 상태와 에러 메시지를 관리하세요.

</details>
