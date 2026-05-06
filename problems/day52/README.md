# [Day52] ⚛️ React 무한 스크롤 구현

**카테고리:** ⚛️ React
**난이도:** 🟢 Easy
**제한 시간:** 15분

---

## 문제

쇼핑몰 상품 목록을 무한 스크롤로 구현하세요. IntersectionObserver를 사용하여 사용자가 스크롤할 때마다 추가 데이터를 로드합니다.

## 코드

```typescript
import React, { useState, useEffect, useRef } from 'react';

const products = Array.from({ length: 20 }, (_, i) => ({ id: i + 1, name: `Product ${i + 1}` }));

function InfiniteScroll() {
  const [items, setItems] = useState(products);
  const loader = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // TODO: 여기에 구현하세요
      }
    }, { threshold: 1.0 });

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, []);

  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div ref={loader}>Loading more items...</div>
    </div>
  );
}

export default InfiniteScroll;
```

## 요구사항

1. IntersectionObserver를 사용하여 스크롤 이벤트를 감지해야 합니다.
2. 사용자가 스크롤하여 하단에 도달할 때마다 새로운 상품을 추가해야 합니다.
3. 초기 상품 목록은 20개이며, 스크롤할 때마다 10개의 상품을 추가해야 합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

IntersectionObserver를 사용하여 하단 요소가 화면에 보일 때 새로운 데이터를 추가하세요.

</details>
