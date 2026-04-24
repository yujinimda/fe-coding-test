# [Day40] 🔷 🔷 TypeScript 🔷 대시보드 필터 옵션 타입 정의

**카테고리:** 🔷 TypeScript
**난이도:** 🟢 Easy
**제한 시간:** 15분

---

## 문제

대시보드에서 다양한 필터 옵션을 관리하기 위한 타입을 제네릭을 활용하여 정의하세요. 필터 옵션은 여러 유형의 데이터를 다룰 수 있어야 하며, 각 필터는 이름과 값의 쌍으로 구성됩니다.

## 코드

```typescript
type FilterOption<T> = {
  name: string;
  value: T;
};

const stringFilter: FilterOption<string> = {
  name: 'Category',
  value: 'Electronics'
};

const numberFilter: FilterOption<number> = {
  name: 'Price',
  value: 100
};

const booleanFilter: FilterOption<boolean> = {
  name: 'InStock',
  value: true
};

// TODO: 여기에 구현하세요
function applyFilter<T>(filter: FilterOption<T>): string {
  // 필터를 적용하는 로직을 구현하세요
}
```

## 요구사항

1. 제네릭을 사용하여 다양한 타입의 필터 옵션을 정의할 수 있어야 한다.
2. FilterOption 타입은 name과 value 속성을 가져야 한다.
3. applyFilter 함수는 필터 옵션을 받아 해당 필터를 적용한 결과를 문자열로 반환해야 한다.
4. applyFilter 함수는 필터의 타입에 따라 다른 동작을 해야 한다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

applyFilter 함수에서 필터의 타입에 따라 조건문을 사용하여 다른 로직을 구현하세요.

</details>
