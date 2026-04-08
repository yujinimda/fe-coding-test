# [Day24] 🔷 🔷 TypeScript 이벤트 핸들러 타입 정의

**카테고리:** 🔷 TypeScript
**난이도:** 🟡 Medium
**제한 시간:** 15분

---

## 문제

쇼핑몰 관리자 페이지에서 다양한 버튼 클릭 이벤트를 처리하는 핸들러 타입을 정의하세요. 각 버튼은 서로 다른 데이터를 전달하며, 이를 처리할 수 있는 타입을 만들어야 합니다.

## 코드

```typescript
type ButtonEvent = { type: string; payload: any };

const events: ButtonEvent[] = [
  { type: 'addProduct', payload: { name: 'New Product', price: 100 } },
  { type: 'deleteProduct', payload: { id: 1 } },
  { type: 'updateProduct', payload: { id: 2, price: 150 } },
];

// TODO: 여기에 구현하세요
type EventHandler = (event: ButtonEvent) => void;

function handleEvent(event: ButtonEvent) {
  // TODO: 여기에 구현하세요
}
```

## 요구사항

1. ButtonEvent 타입을 기반으로 다양한 이벤트를 처리할 수 있는 EventHandler 타입을 정의하세요.
2. handleEvent 함수는 전달된 이벤트의 타입에 따라 적절한 처리를 수행해야 합니다.
3. 각 이벤트 타입에 맞는 처리 로직을 handleEvent 함수 내에 구현하세요.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

이벤트 타입에 따라 switch 문을 사용하여 각기 다른 처리를 수행할 수 있습니다.

</details>
