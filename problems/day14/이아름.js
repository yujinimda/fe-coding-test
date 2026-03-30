const comments = [
  {
    id: 1,
    author: "Alice",
    children: [
      { id: 2, author: "Bob", children: [] },
      {
        id: 3,
        author: "Alice",
        children: [{ id: 4, author: "Alice", children: [] }],
      },
    ],
  },
  { id: 5, author: "Charlie", children: [] },
  {
    id: 6,
    author: "Alice",
    children: [{ id: 7, author: "Bob", children: [] }],
  },
];

// 재귀함수로 풀었을 때
function countCommentsByAuthor(comments, author) {
  let count = 0;

  for (let i = 0; i < comments.length; i++) {
    const comment = comments[i];

    if (comment.author === author) {
      count++;
    }

    if (comment.children && comment.children.length > 0) {
      // children의 length가 0이 아닐 때 재귀로 찾기
      count += countCommentsByAuthor(comment.children, author);
    }
  }

  return count;
}

console.log(countCommentsByAuthor(comments, "Alice")); // 4

// DFS(깊이 우선 탐색) 방식
// 재귀가 내부적으로 사용하는 스택을 직접 배열로 만들어서 관리
function countCommentsByAuthorDFS(comments, targetAuthor) {
  let count = 0;
  // 탐색해야 할 노드들을 담은 스택 (초기값은 전체 댓글 배열)
  const stack = [...comments];
  console.log(stack);

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);

    if (current.author === targetAuthor) {
      count++;
    }

    // 자식들이 있다면 스택에 추가 (나중에 꺼내서 확인하기 위함)
    if (current.children && current.children.length > 0) {
      // 자식들을 스택에 넣으면 다음 반복 때 pop()되어 탐색
      stack.push(...current.children);
    }
  }

  return count;
}

console.log(countCommentsByAuthorDFS(comments, "Alice")); // 4
