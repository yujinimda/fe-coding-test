# [Day56] ⚡ ⚡ JavaScript Proxy로 반응형 객체 구현

**카테고리:** ⚡ JavaScript
**난이도:** 🟡 Medium
**제한 시간:** 15분

---

## 문제

쇼핑몰 관리자 페이지에서 상품 정보를 반응형으로 관리하는 객체를 구현하세요. Proxy를 사용하여 객체의 속성이 변경될 때마다 콘솔에 변경된 속성과 값을 출력하도록 하세요.

## 코드

```typescript
const product = {
  name: 'Smartphone',
  price: 999,
  stock: 50
};

// TODO: 여기에 구현하세요
function createReactiveProduct(product) {
}

const reactiveProduct = createReactiveProduct(product);
reactiveProduct.price = 899; // 콘솔에 'price가 899로 변경되었습니다.' 출력
reactiveProduct.stock = 45; // 콘솔에 'stock가 45로 변경되었습니다.' 출력
```

## 요구사항

1. Proxy를 사용하여 객체의 속성이 변경될 때마다 콘솔에 변경된 속성과 값을 출력해야 합니다.
2. createReactiveProduct 함수는 주어진 객체를 Proxy로 감싸서 반환해야 합니다.
3. 객체의 속성이 변경될 때마다 콘솔에 '속성명이 값으로 변경되었습니다.' 형식으로 출력해야 합니다.
4. 기존 객체의 속성 외에 새로운 속성을 추가할 때도 콘솔에 출력되어야 합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

Proxy의 set 트랩을 사용하여 객체의 속성 변경을 감지할 수 있습니다.

</details>
