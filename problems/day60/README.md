# [Day60] 🧩 🧩 알고리즘: URL 쿼리스트링 파싱

**카테고리:** 🧩 알고리즘
**난이도:** 🟡 Medium
**제한 시간:** 20분

---

## 문제

쇼핑몰 관리자 페이지에서 URL의 쿼리스트링을 파싱하여 필터링 조건을 추출하는 함수를 작성하세요. 이 함수는 주어진 URL에서 쿼리스트링을 분석하여 객체 형태로 반환해야 합니다.

## 코드

```typescript
// 예시 URL: "https://shop.example.com/admin?category=electronics&sort=price_desc&inStock=true"

// TODO: 여기에 구현하세요
function parseQueryString(url) {
    // URL에서 쿼리스트링 부분만 추출
    const queryString = url.split('?')[1];
    
    // 쿼리스트링을 객체로 변환
    const queryObject = {};
    
    // TODO: 여기에 구현하세요
    
    return queryObject;
}
```

## 요구사항

1. URL에서 쿼리스트링 부분을 추출해야 합니다.
2. 추출한 쿼리스트링을 key-value 형태의 객체로 변환해야 합니다.
3. 쿼리스트링이 없는 경우 빈 객체를 반환해야 합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

URL의 '?' 이후 부분을 '&'로 분리하여 각각의 key-value 쌍을 '='로 나누어 객체에 저장하세요.

</details>
