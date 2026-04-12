# [Day28] 🧩 🧩 알고리즘: 트리 구조 탐색을 통한 메뉴 활성화 상태 확인

**카테고리:** 🧩 알고리즘
**난이도:** 🟢 Easy
**제한 시간:** 20분

---

## 문제

쇼핑몰 관리자 페이지에서 메뉴 구조를 탐색하여 특정 메뉴의 활성화 상태를 확인하는 함수를 작성하세요. 각 메뉴는 하위 메뉴를 가질 수 있으며, 활성화 상태는 'active' 속성으로 표시됩니다.

## 코드

```typescript
const menuTree = [
  {
    id: 1,
    name: 'Home',
    active: false,
    children: [
      { id: 2, name: 'Dashboard', active: false, children: [] },
      { id: 3, name: 'Reports', active: false, children: [] }
    ]
  },
  {
    id: 4,
    name: 'Products',
    active: false,
    children: [
      { id: 5, name: 'Electronics', active: true, children: [] },
      { id: 6, name: 'Clothing', active: false, children: [] }
    ]
  }
];

// TODO: 여기에 구현하세요
function isMenuActive(menuTree, menuId) {
}
```

## 요구사항

1. 주어진 메뉴 트리에서 특정 메뉴 ID를 받아 해당 메뉴의 활성화 상태를 반환해야 합니다.
2. 메뉴는 중첩된 구조를 가질 수 있으며, 모든 하위 메뉴를 탐색해야 합니다.
3. 메뉴 ID가 존재하지 않으면 false를 반환해야 합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

재귀 함수를 사용하여 트리 구조를 탐색하세요.

</details>
