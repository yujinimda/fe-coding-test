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

function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  const clone = Array.isArray(obj) ? [] : {};

  Object.keys(obj).forEach((key) => {
    clone[key] = deepClone(obj[key]);
  });

  return clone;
}

const test = deepClone(sampleData);
test.items[0].name = "ahreum";
console.log(sampleData);
console.log(test);
