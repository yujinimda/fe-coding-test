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

/**
 * 객체를 깊은 복사
 * @param {any} obj - 복사할 객체
 * @returns {any} 깊은 복사된 객체
 */
function deepClone(obj) {
  // 원시값이면 그냥 반환
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // 배열인지 객체인지 확인 후 초기값 설정
  const clone = Array.isArray(obj) ? [] : {};

  Object.keys(obj).forEach((key) => {
    // 값이 객체일 수 있기 때문에, 재귀 호출
    clone[key] = deepClone(obj[key]);
  });

  return clone;
}

// 1. 중첩 객체 변경
const cloned = deepClone(sampleData);
cloned.user.preferences.theme = "light";

console.log(sampleData.user.preferences.theme); // 'dark' → 원본 유지!
console.log(cloned.user.preferences.theme); // 'light'

// 2. 배열 변경
cloned.items.push({ id: 3, name: "Pencil", price: 1 });

console.log(sampleData.items.length); // 2 → 원본 유지!
console.log(cloned.items.length); // 3

// 3. 배열 내부 객체 변경
cloned.items[0].price = 999;

console.log(sampleData.items[0].price); // 10 → 원본 유지!
console.log(cloned.items[0].price); // 999
