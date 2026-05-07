# [Day53] ⚡ ⚡ JavaScript 디바운스 함수 직접 구현하기

**카테고리:** ⚡ JavaScript
**난이도:** 🟢 Easy
**제한 시간:** 15분

---

## 문제

쇼핑몰 검색 기능에서 사용자가 입력할 때마다 서버에 요청을 보내지 않도록 디바운스 함수를 구현하세요. 디바운스 함수는 사용자가 입력을 멈춘 후 일정 시간 동안 대기한 후에만 함수를 실행합니다.

## 코드

```typescript
// TODO: 여기에 구현하세요
function debounce(func, delay) {
  // TODO: 여기에 구현하세요
}

// 예시로 사용할 검색 함수
function searchProducts(query) {
  console.log(`Searching for products with query: ${query}`);
}

// 디바운스된 검색 함수
const debouncedSearch = debounce(searchProducts, 300);

// 사용자가 입력할 때마다 호출되는 함수
function onUserInput(query) {
  debouncedSearch(query);
}
```

## 요구사항

1. debounce 함수는 두 개의 인자를 받습니다: 실행할 함수(func)와 지연 시간(delay).
2. debounce 함수는 사용자가 입력을 멈춘 후 delay 시간(ms) 동안 대기한 후에만 func를 실행합니다.
3. debounce 함수는 마지막 호출된 인자만을 사용하여 func를 실행해야 합니다.
4. debounce 함수는 여러 번 호출되더라도 func가 한 번만 실행되도록 보장해야 합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

setTimeout과 clearTimeout을 활용하여 지연 시간을 관리하세요.

</details>
