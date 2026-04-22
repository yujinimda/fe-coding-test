# [Day38] ▲ ▲ Next.js 서버 컴포넌트와 클라이언트 컴포넌트 분리

**카테고리:** ▲ Next.js
**난이도:** 🟢 Easy
**제한 시간:** 15분

---

## 문제

쇼핑몰의 제품 목록 페이지를 구현하고 있습니다. 서버 컴포넌트는 제품 데이터를 가져오고, 클라이언트 컴포넌트는 사용자 상호작용을 처리합니다. 서버 컴포넌트에서 제품 데이터를 받아 클라이언트 컴포넌트로 전달하는 구조를 구현하세요.

## 코드

```typescript
// 서버 컴포넌트
async function fetchProducts() {
  // 제품 데이터를 가져오는 함수
  const products = [
    { id: 1, name: 'Laptop', price: 1500 },
    { id: 2, name: 'Smartphone', price: 800 },
    { id: 3, name: 'Tablet', price: 600 }
  ];
  return products;
}

// 클라이언트 컴포넌트
function ProductList({ products }) {
  // TODO: 여기에 구현하세요
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {/* 제품 목록을 렌더링하세요 */}
      </ul>
    </div>
  );
}

// 페이지 컴포넌트
export default async function Page() {
  const products = await fetchProducts();
  return <ProductList products={products} />;
}
```

## 요구사항

1. 서버 컴포넌트에서 제품 데이터를 가져와야 합니다.
2. 클라이언트 컴포넌트는 전달받은 제품 데이터를 렌더링해야 합니다.
3. 제품 목록은 각 제품의 이름과 가격을 표시해야 합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

클라이언트 컴포넌트에서 props로 전달받은 데이터를 map 함수를 사용하여 렌더링하세요.

</details>
