async function customPromiseAll(promises) {
  if (promises === null || promises === undefined) {
    return [];
  }

  // 각 promise를 처리해서 Promise 배열을 만든다
  const promiseResults = promises.map(async (promise) => {
    return Promise.resolve(promise);
  });

  // Promise 배열을 전부 기다린다
  const results = await Promise.all(promiseResults);

  return results;
}

const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Result 1"), 1000),
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Result 2"), 500),
);
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Result 3"), 1500),
);

customPromiseAll([promise1, promise2, promise3]).then((results) => {
  console.log(results);
});
