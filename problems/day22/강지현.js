const users = [
  { name: "Alice", age: 30, joined: "2023-01-15" },
  { name: "Bob", age: 25, joined: "2023-03-10" },
  { name: "Charlie", age: 35, joined: "2022-12-20" },
  { name: "David", age: 30, joined: "2023-02-05" },
  { name: "Eve", age: 25, joined: "2023-01-25" },
];

/**
 * 사용자 목록을 다중 조건으로 정렬
 *
 * 정렬 우선순위:
 * 1. 이름 알파벳 오름차순
 * 2. 나이 오름차순 (이름이 같은 경우)
 * 3. 가입일 내림차순 (이름과 나이가 같은 경우)
 *
 * @param {{ name: string, age: number, joined: string }[]} users - 정렬할 사용자 배열
 * @returns {{ name: string, age: number, joined: string }[]} 정렬된 새로운 사용자 배열 (원본 불변)
 */
function sortUsers(users) {
  return [...users].sort((a, b) => {
    return (
      a.name.localeCompare(b.name) ||
      a.age - b.age ||
      b.joined.localeCompare(a.joined)
    );
  });
}

// TEST
console.log(sortUsers(users));
