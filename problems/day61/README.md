# [Day61] ⚛️ ⚛️ React 비제어 컴포넌트를 제어 컴포넌트로 전환

**카테고리:** ⚛️ React
**난이도:** 🟢 Easy
**제한 시간:** 15분

---

## 문제

쇼핑몰의 상품 검색 기능을 구현하는 중입니다. 현재 검색 입력 필드는 비제어 컴포넌트로 되어 있습니다. 이를 제어 컴포넌트로 전환하여 검색어를 상태로 관리하고, 검색어가 변경될 때마다 콘솔에 출력되도록 하세요.

## 코드

```typescript
import React, { useState } from 'react';

function ProductSearch() {
  // TODO: 여기에 구현하세요
  return (
    <div>
      <input type="text" placeholder="상품 검색" />
    </div>
  );
}

export default ProductSearch;
```

## 요구사항

1. 검색 입력 필드를 제어 컴포넌트로 전환해야 합니다.
2. 검색어를 상태로 관리해야 합니다.
3. 검색어가 변경될 때마다 콘솔에 검색어를 출력해야 합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

useState 훅을 사용하여 입력 값을 상태로 관리하고, onChange 이벤트 핸들러를 통해 상태를 업데이트하세요.

</details>
