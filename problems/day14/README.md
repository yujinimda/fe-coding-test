# [Day14] 🧩 트리 구조 탐색을 통한 댓글 수 세기

**카테고리:** 🧩 알고리즘
**난이도:** 🟢 Easy
**제한 시간:** 20분

---

## 문제

게시판의 댓글 트리 구조에서 특정 사용자가 작성한 댓글의 수를 세는 함수를 작성하세요. 댓글은 중첩될 수 있으며, 각 댓글은 고유한 ID와 작성자 정보를 포함합니다.

## 코드

```typescript
const comments = [
  { id: 1, author: 'Alice', children: [
    { id: 2, author: 'Bob', children: [] },
    { id: 3, author: 'Alice', children: [
      { id: 4, author: 'Alice', children: [] }
    ]}
  ]},
  { id: 5, author: 'Charlie', children: [] },
  { id: 6, author: 'Alice', children: [
    { id: 7, author: 'Bob', children: [] }
  ]}
];

// TODO: 여기에 구현하세요
function countCommentsByAuthor(comments, author) {
}
```

## 요구사항

1. 주어진 댓글 트리 구조에서 특정 사용자가 작성한 댓글의 수를 반환해야 합니다.
2. 댓글은 중첩될 수 있으며, 모든 하위 댓글도 탐색해야 합니다.
3. 재귀를 사용하여 트리 구조를 탐색해야 합니다.
4. 함수는 author와 일치하는 작성자의 댓글 수를 정확히 세어야 합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

재귀 함수를 사용하여 각 댓글과 그 하위 댓글을 탐색하세요.

</details>
