// ## 문제

// 쇼핑몰에서 제품 상세 페이지로 이동할 때, URL의 파라미터로 제품 ID를 받아 해당 제품의 정보를 반환하는 함수를 작성하세요. 이 함수는 Next.js의 동적 라우팅에서 사용됩니다.

// ## 코드

```typescript
const products = [
  { id: '1', name: 'Laptop', price: 1500 },
  { id: '2', name: 'Smartphone', price: 800 },
  { id: '3', name: 'Tablet', price: 600 }
];

// TODO: 여기에 구현하세요
function getProductById(params) {

  const 상품 = products.find(상품 => 상품.id === params.id)
  return 상품 || null

}
```

// ## 요구사항

// 1. params 객체에서 id 값을 추출하여 해당하는 제품 정보를 반환해야 합니다.
// 2. id에 해당하는 제품이 없을 경우 null을 반환해야 합니다.
// 3. params 객체의 구조는 { id: string } 형태입니다.


