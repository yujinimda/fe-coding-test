# [Day34] 🔷 🔷 TypeScript 🔷 대시보드 위젯 설정 타입 생성

**카테고리:** 🔷 TypeScript
**난이도:** 🟡 Medium
**제한 시간:** 15분

---

## 문제

대시보드에서 다양한 위젯을 설정할 수 있는 기능을 구현하려고 합니다. 각 위젯은 고유한 설정을 가지고 있으며, 이를 타입으로 정의해야 합니다. 주어진 위젯 설정 객체를 기반으로 Mapped Type을 사용하여 각 위젯의 설정 타입을 동적으로 생성하세요.

## 코드

```typescript
type WidgetSettings = {
  chart: { type: string; data: number[] };
  table: { columns: string[]; rows: any[][] };
  text: { content: string; fontSize: number };
};

// TODO: 여기에 구현하세요
type DynamicWidgetSettings<T> = any;

const widgetSettings: WidgetSettings = {
  chart: { type: 'bar', data: [1, 2, 3] },
  table: { columns: ['Name', 'Age'], rows: [['Alice', 30], ['Bob', 25]] },
  text: { content: 'Hello World', fontSize: 14 }
};

const settings: DynamicWidgetSettings<typeof widgetSettings> = {
  chart: { type: 'line', data: [4, 5, 6] },
  table: { columns: ['Product', 'Price'], rows: [['Laptop', 1200], ['Mouse', 25]] },
  text: { content: 'Welcome', fontSize: 16 }
};
```

## 요구사항

1. Mapped Type을 사용하여 주어진 WidgetSettings 객체의 타입을 동적으로 생성해야 합니다.
2. DynamicWidgetSettings 타입은 WidgetSettings의 구조를 기반으로 각 위젯의 설정 타입을 생성해야 합니다.
3. DynamicWidgetSettings 타입을 사용하여 settings 객체의 타입을 정의해야 합니다.
4. settings 객체는 widgetSettings 객체와 동일한 구조를 가져야 합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

Mapped Type을 사용하여 객체의 키를 순회하며 타입을 생성할 수 있습니다.

</details>
