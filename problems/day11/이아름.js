const sampleData = {
  user: {
    name: "Alice",
    age: 30,
    preferences: {
      theme: "dark",
      notifications: true,
    },
  },
  items: [
    { id: 1, name: "Book", price: 10 },
    { id: 2, name: "Pen", price: 2 },
  ],
};

function deepClone(obj, cache = new WeakMap()) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // 순환 참조 문제 해결을 위해 추가
  // const a = { name: "Alice" };
  // const b = { name: "Bob" };
  // a.friend = b;
  // b.friend = a; < 서로를 참조하는 순환 구조
  // cache 체크가 없다면? Alice 복사 -> Bob 복사 -> Alice 복사 -> Bob 복사... 무한 복사되는 구조가 되어버림
  if (cache.has(obj)) {
    return cache.get(obj);
  }

  const clone = Array.isArray(obj) ? [] : {};

  cache.set(obj, clone);

  Object.keys(obj).forEach((key) => {
    clone[key] = deepClone(obj[key], cache);
  });

  return clone;
}

const test = deepClone(sampleData);
test.items[0].name = "ahreum";
console.log(sampleData);
console.log(test);

const a = { name: "Alice" };
const b = { name: "Bob" };
a.friend = b;
b.friend = a;

const clonedA = deepClone(a);

console.log(clonedA.friend.name); // Bob
