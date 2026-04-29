# [Day45] ⚛️ React 커스텀 훅 구현: useLocalStorage

**카테고리:** ⚛️ React
**난이도:** 🟢 Easy
**제한 시간:** 15분

---

## 문제

쇼핑몰 관리자 페이지에서 사용자의 테마 설정을 로컬 스토리지에 저장하고 불러오는 커스텀 훅을 구현하세요. 이 훅은 테마 설정을 저장하고, 저장된 테마를 불러오는 기능을 제공합니다.

## 코드

```typescript
// TODO: 여기에 구현하세요
function useLocalStorage(key, initialValue) {
  // 초기값을 설정하고 로컬 스토리지에서 값을 불러오는 로직을 구현하세요
  // 테마 설정을 저장하고 불러오는 기능을 구현하세요
}

// 사용 예시
const [theme, setTheme] = useLocalStorage('theme', 'light');
```

## 요구사항

1. 로컬 스토리지에 값을 저장할 수 있어야 합니다.
2. 로컬 스토리지에서 값을 불러올 수 있어야 합니다.
3. 초기값을 설정할 수 있어야 합니다.
4. 값이 변경될 때마다 로컬 스토리지에 자동으로 저장되어야 합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

useEffect를 활용하여 값이 변경될 때 로컬 스토리지에 저장하도록 구현하세요.

</details>
