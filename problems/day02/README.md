# [Day02] 🧩 DOM 트리 순회 및 노드 정보 출력

**카테고리:** 🧩 알고리즘
**난이도:** 🟢 Easy
**제한 시간:** 20분

---

## 문제

쇼핑몰 웹사이트의 상품 목록을 나타내는 DOM 트리를 BFS 또는 DFS 방식으로 순회하여, 각 상품의 이름과 가격을 출력하는 프로그램을 작성하세요. 상품 목록은 ul 태그 안에 li 태그로 구성되어 있으며, 각각의 li 태그 안에는 상품 이름과 가격 정보가 포함되어 있습니다.

## 코드

```typescript
<ul id='product-list'>\n    <li>\n        <span class='name'>상품 A</span>\n        <span class='price'>10000</span>\n    </li>\n    <li>\n        <span class='name'>상품 B</span>\n        <span class='price'>15000</span>\n    </li>\n    <li>\n        <span class='name'>상품 C</span>\n        <span class='price'>20000</span>\n    </li>\n</ul>
```

## 요구사항

1. BFS 또는 DFS를 사용하여 DOM 트리를 순회할 것
2. 각 노드에서 상품 이름과 가격을 콘솔에 출력할 것
3. 비어 있거나 잘못된 DOM 구조에 대한 예외 처리 할 것

## 힌트

<details>
<summary>💡 힌트 보기</summary>

자바스크립트의 재귀 함수를 활용해 DFS를 구현하세요.

</details>
