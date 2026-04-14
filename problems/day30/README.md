# [Day30] ⚡ ⚡ JavaScript this 바인딩 문제 해결

**카테고리:** ⚡ JavaScript
**난이도:** 🟡 Medium
**제한 시간:** 15분

---

## 문제

쇼핑몰 관리자 페이지에서 상품 정보를 관리하는 객체가 있습니다. 이 객체의 메서드를 호출할 때, this 바인딩 문제를 해결하여 올바른 상품 정보를 출력하도록 하세요.

## 코드

```typescript
const productManager = {
  products: [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Mouse', price: 25 }
  ],
  printProductDetails: function() {
    this.products.forEach(function(product) {
      // TODO: 여기에 구현하세요
      console.log(`Product: ${product.name}, Price: ${product.price}`);
    });
  }
};

// productManager.printProductDetails()를 호출하여 상품 정보를 출력하세요.
```

## 요구사항

1. forEach 내부에서 this를 올바르게 바인딩하여 상품 정보를 출력해야 합니다.
2. 화살표 함수를 사용하여 this 바인딩 문제를 해결하세요.
3. productManager.printProductDetails()를 호출하면 각 상품의 이름과 가격이 출력되어야 합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

화살표 함수는 상위 스코프의 this를 유지합니다.

</details>
