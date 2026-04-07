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
  const sorted = [...users].sort((a, b) => {
    if (a.name === b.name && a.age === b.age) {
      return new Date(b.joined) - new Date(a.joined);
    }

    if (a.name === b.name) {
      return a.age - b.age;
    }

    return a.name.localeCompare(b.name);
  });

  return sorted;
}

console.log(sortUsers(users));
