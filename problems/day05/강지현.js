/**
 * 여러 개의 Promise 또는 값을 병렬로 처리하고, 모든 결과를 배열로 반환
 * @param {Array<Promise | any>} promises - 실행할 Promise 또는 값의 배열
 * @returns {Promise<Array>} 각 Promise의 실행 결과 배열
 */
function customPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (promises === null || promises === undefined) {
      return resolve([]);
    }

    let resolveCount = 0;
    const promiseLength = promises.length;
    const resolvedValue = new Array(promiseLength);

    if (promiseLength === 0) {
      return resolve([]);
    }

    promises.forEach(async (promise, index) => {
      try {
        const value = await promise;
        resolvedValue[index] = value;
        resolveCount++;
        if (resolveCount === promiseLength) {
          resolve(resolvedValue);
        }
      } catch (error) {
        reject(error);
      }
    });
  });
}

/**
 * 여러 개의 Promise 또는 값을 병렬로 처리하고, 성공/실패 여부와 관계없이 모든 결과를 반환
 * @param {Array<Promise | any>} promises - 실행할 Promise 또는 값의 배열
 * @returns {Promise<Array<{status: string, value?: any, reason?: any}>>} 각 Promise의 성공/실패 여부와 결과를 담은 배열
 */
function customPromiseAllSettled(promises) {
  return new Promise((resolve, reject) => {
    if (promises === null || promises === undefined) {
      return resolve([]);
    }

    const promiseLength = promises.length;
    const resolvedValue = new Array(promiseLength);
    let resolveCount = 0;

    if (promiseLength === 0) {
      return resolve([]);
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(
          (value) => {
            resolvedValue[index] = { status: "fulfilled", value: value };
          },
          (reason) => {
            resolvedValue[index] = { status: "rejected", reason };
          },
        )
        .finally(() => {
          if (++resolveCount === promiseLength) {
            resolve(resolvedValue);
          }
        });
    });
  });
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

customPromiseAllSettled([
  Promise.resolve("A"),
  Promise.reject("Error"),
  123,
]).then(console.log);
