# [Day37] ⚛️ ⚛️ React forwardRef와 useImperativeHandle 활용

**카테고리:** ⚛️ React
**난이도:** 🟡 Medium
**제한 시간:** 15분

---

## 문제

React 컴포넌트에서 forwardRef와 useImperativeHandle을 사용하여 부모 컴포넌트에서 자식 컴포넌트의 내부 메서드를 호출할 수 있도록 구현하세요. 이 기능은 쇼핑몰의 상품 상세 페이지에서 이미지 확대 기능을 구현하는 데 사용됩니다.

## 코드

```typescript
import React, { useRef, forwardRef, useImperativeHandle } from 'react';

// 상품 이미지 컴포넌트
const ProductImage = forwardRef((props, ref) => {
  const imageRef = useRef();

  useImperativeHandle(ref, () => ({
    zoomIn() {
      // TODO: 여기에 구현하세요
    },
    zoomOut() {
      // TODO: 여기에 구현하세요
    }
  }));

  return (
    <img ref={imageRef} src={props.src} alt="Product" style={{ width: '100%' }} />
  );
});

// 부모 컴포넌트
function ProductDetail() {
  const imageRef = useRef();

  const handleZoomIn = () => {
    // TODO: 여기에 구현하세요
  };

  const handleZoomOut = () => {
    // TODO: 여기에 구현하세요
  };

  return (
    <div>
      <ProductImage ref={imageRef} src="/path/to/image.jpg" />
      <button onClick={handleZoomIn}>Zoom In</button>
      <button onClick={handleZoomOut}>Zoom Out</button>
    </div>
  );
}

export default ProductDetail;
```

## 요구사항

1. ProductImage 컴포넌트에서 useImperativeHandle을 사용하여 zoomIn과 zoomOut 메서드를 정의하세요.
2. zoomIn 메서드는 이미지의 크기를 20% 증가시켜야 합니다.
3. zoomOut 메서드는 이미지의 크기를 20% 감소시켜야 합니다.
4. ProductDetail 컴포넌트에서 버튼 클릭 시 각각 zoomIn과 zoomOut 메서드를 호출하세요.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

useImperativeHandle을 사용하여 부모 컴포넌트에서 자식 컴포넌트의 메서드를 호출할 수 있도록 설정하세요. 이미지의 크기를 조정할 때는 style 속성을 활용하세요.

</details>
