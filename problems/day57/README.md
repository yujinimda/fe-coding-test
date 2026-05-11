# [Day57] ⚛️ useReducer로 복잡한 상태 로직 리팩토링

**카테고리:** ⚛️ React
**난이도:** 🟢 Easy
**제한 시간:** 15분

---

## 문제

쇼핑몰의 장바구니 기능을 구현하는 상황입니다. useReducer를 사용하여 장바구니 상태를 관리하고, 상품 추가, 삭제, 수량 변경 기능을 구현하세요.

## 코드

```typescript
import React, { useReducer } from 'react';

const initialCartState = [];

// TODO: 여기에 구현하세요
function cartReducer(state, action) {
}

function ShoppingCart() {
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);

  const addItem = (item) => {
    // TODO: 여기에 구현하세요
  };

  const removeItem = (id) => {
    // TODO: 여기에 구현하세요
  };

  const updateQuantity = (id, quantity) => {
    // TODO: 여기에 구현하세요
  };

  return (
    <div>
      <h2>장바구니</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity}개
            <button onClick={() => removeItem(item.id)}>삭제</button>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addItem({ id: 1, name: '새 상품', quantity: 1 })}>상품 추가</button>
    </div>
  );
}

export default ShoppingCart;
```

## 요구사항

1. useReducer를 사용하여 장바구니 상태를 관리해야 합니다.
2. 상품을 장바구니에 추가하는 기능을 구현하세요.
3. 장바구니에서 상품을 삭제하는 기능을 구현하세요.
4. 장바구니에 있는 상품의 수량을 변경하는 기능을 구현하세요.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

useReducer의 action 객체를 활용하여 상태를 업데이트하세요. action 객체는 type과 payload를 포함할 수 있습니다.

</details>
