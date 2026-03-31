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

/**
 * 특정 사용자가 작성한 댓글 수를 반환
 * @param {Object[]} comments - 확인할 댓글
 * @param {string} author - 작성자 이름
 * @returns {number} 특정 사용자가 작성한 댓글 수
 */
function countCommentsByAuthor(comments, author) {
  let count = 0;

  for (const comment of comments) {
    if (comment.author === author) {
      count++;
    }

    // 하위 자식이 있을 경우, 자식의 댓글 확인
    count += countCommentsByAuthor(comment.children, author);
  }

  return count;
}

console.log(countCommentsByAuthor(comments, "Alice"));
