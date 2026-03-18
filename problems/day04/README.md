# [Day04] ⚛️ Implement Optimistic UI Update in a Shopping Cart

**카테고리:** ⚛️ React
**난이도:** 🟡 Medium
**제한 시간:** 15분

---

## 문제

You are tasked with implementing an optimistic UI update for a shopping cart in a React application. When a user adds an item to the cart, the UI should immediately reflect the change before the server confirms the addition. Implement this pattern using the provided code structure.

## 코드

```typescript
import React, { useState } from 'react';

const initialCart = [
  { id: 1, name: 'Laptop', quantity: 1 },
  { id: 2, name: 'Phone', quantity: 2 }
];

const addItemToCart = async (item) => {
  // Simulate a server request
  return new Promise((resolve) => {
    setTimeout(() => resolve(item), 1000);
  });
};

function ShoppingCart() {
  const [cart, setCart] = useState(initialCart);

  const handleAddItem = async (newItem) => {
    // Optimistically update the cart
    setCart((prevCart) => [...prevCart, newItem]);

    try {
      await addItemToCart(newItem);
    } catch (error) {
      // Handle error (e.g., revert the optimistic update)
      setCart((prevCart) => prevCart.filter(item => item.id !== newItem.id));
    }
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id}>{item.name} - Quantity: {item.quantity}</li>
        ))}
      </ul>
      <button onClick={() => handleAddItem({ id: 3, name: 'Tablet', quantity: 1 })}>
        Add Tablet
      </button>
    </div>
  );
}

export default ShoppingCart;
```

## 요구사항

1. Implement an optimistic UI update when adding a new item to the cart.
2. Ensure the UI reflects the addition immediately, even before the server confirms it.
3. Revert the optimistic update if the server request fails.
4. Use the provided initialCart data to manage the cart state.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

Use state management to update the UI immediately and handle potential errors to revert changes.

</details>
