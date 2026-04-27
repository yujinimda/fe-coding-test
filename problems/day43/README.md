# [Day43] ⚛️ ⚛️ React 컴포넌트 최적화: 불필요한 리렌더링 방지

**카테고리:** ⚛️ React
**난이도:** 🟡 Medium
**제한 시간:** 15분

---

## 문제

쇼핑몰의 상품 목록을 표시하는 React 컴포넌트가 있습니다. 이 컴포넌트는 상품의 상태가 변경될 때마다 불필요하게 리렌더링되고 있습니다. 이를 최적화하여 불필요한 리렌더링을 방지하세요.

## 코드

```typescript
import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Laptop', price: 1200, inStock: true },
  { id: 2, name: 'Mouse', price: 25, inStock: false },
  { id: 3, name: 'Keyboard', price: 75, inStock: true },
];

function ProductList() {
  const [productList, setProductList] = useState(products);

  // TODO: 여기에 구현하세요
  const toggleStockStatus = (id) => {
    setProductList((prevList) =>
      prevList.map((product) =>
        product.id === id ? { ...product, inStock: !product.inStock } : product
      )
    );
  };

  return (
    <div>
      {productList.map((product) => (
        <ProductItem key={product.id} product={product} onToggle={toggleStockStatus} />
      ))}
    </div>
  );
}

function ProductItem({ product, onToggle }) {
  console.log(`Rendering ProductItem: ${product.name}`); // 리렌더링 확인용
  return (
    <div>
      <span>{product.name} - ${product.price}</span>
      <button onClick={() => onToggle(product.id)}>
        {product.inStock ? 'In Stock' : 'Out of Stock'}
      </button>
    </div>
  );
}

export default ProductList;
```

## 요구사항

1. ProductItem 컴포넌트가 불필요하게 리렌더링되지 않도록 최적화하세요.
2. 상품의 재고 상태를 토글할 때만 해당 상품의 ProductItem 컴포넌트가 리렌더링되도록 하세요.
3. React.memo를 활용하여 최적화를 구현하세요.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

React.memo를 사용하여 컴포넌트를 메모이제이션하면 불필요한 리렌더링을 방지할 수 있습니다.

</details>
