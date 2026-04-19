# [Day35] 🧩 🧩 알고리즘: DOM 트리 BFS 순회 구현

**카테고리:** 🧩 알고리즘
**난이도:** 🟢 Easy
**제한 시간:** 20분

---

## 문제

웹 페이지의 DOM 트리를 BFS 방식으로 순회하는 함수를 작성하세요. 이 함수는 주어진 루트 노드에서 시작하여 모든 자식 노드를 순회하며, 각 노드의 태그 이름을 배열에 저장합니다.

## 코드

```typescript
// DOM 트리의 각 노드를 나타내는 객체
class DOMNode {
  constructor(tagName, children = []) {
    this.tagName = tagName; // 태그 이름
    this.children = children; // 자식 노드 배열
  }
}

// 예시 DOM 트리
const root = new DOMNode('html', [
  new DOMNode('head', [
    new DOMNode('title'),
  ]),
  new DOMNode('body', [
    new DOMNode('header'),
    new DOMNode('main', [
      new DOMNode('section'),
      new DOMNode('article'),
    ]),
    new DOMNode('footer'),
  ]),
]);

// TODO: 여기에 구현하세요
function bfsTraverse(root) {
  // 루트 노드부터 시작하여 BFS 방식으로 순회하고, 각 노드의 태그 이름을 배열에 저장하여 반환합니다.
}
```

## 요구사항

1. 루트 노드에서 시작하여 BFS 방식으로 DOM 트리를 순회해야 합니다.
2. 각 노드의 태그 이름을 순회 순서대로 배열에 저장해야 합니다.
3. 순회는 루트 노드부터 시작하여 자식 노드를 왼쪽에서 오른쪽으로 방문해야 합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

큐를 사용하여 현재 노드의 자식들을 순서대로 방문하세요.

</details>
