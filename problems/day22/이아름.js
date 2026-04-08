const users = [
  { name: "Eve", age: 28, joined: "2023-03-25" },
  { name: "Alice", age: 30, joined: "2023-01-15" },
  { name: "Bob", age: 25, joined: "2023-03-10" },
  { name: "Charlie", age: 35, joined: "2022-12-20" },
  { name: "David", age: 30, joined: "2023-02-05" },
  { name: "Eve", age: 25, joined: "2023-01-25" },
  { name: "Eve", age: 28, joined: "2023-02-25" },
];

// TODO: 여기에 구현하세요
function sortUsers(users) {
  return [...users].sort(
    (a, b) =>
      // 1. 이름 오름차순
      a.name.localeCompare(b.name) ||
      // 2. 나이 오름차순 (이름이 같을 때)
      a.age - b.age ||
      // 3. 가입일 내림차순 (이름과 나이가 같을 때)
      b.joined.localeCompare(a.joined),
  );
}

console.log(sortUsers(users));

/**
 * 위 동작 방식 이해하기
 *
 * 1. 첫 번째 조건 실행
 * 이름이 다르면 1이나 -1이 반환 > true (이름 오름차순 정렬)
 * 이름이 만약 같으면 0을 반환 > false여서 다음 조건 확인
 *
 * 2. 두 번째 조건 실행
 * 같은 이름이면서 나이가 다르면 숫자 반환 > true (정렬 확정)
 * 만약 나이도 같으면 0 > false여서 다음 조건 확인
 *
 * 3. 세 번째 조건 실행
 * 이름, 나이가 모두 같다면 가입일자 기준으로 정렬
 * date 객체를 만들어서 계산하는 것보다
 * 2023-01-25 문자열 자체를 비교하는게 성능상 더 이득
 */
