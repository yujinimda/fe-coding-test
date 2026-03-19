/**
 *
 * @param {*} promises
 * @returns
 */
function customPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (promises === null || promises === undefined) {
      return resolve([]);
    }

    let resolveCount = 0;
    const promiseLength = promises.length;
    const resovledValue = new Array(promiseLength);

    if (promiseLength === 0) {
      return resolve([]);
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          resolveCount++;
          resovledValue[index] = value;

          if (resolveCount === promiseLength) {
            resolve(resovledValue);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}

// 예제 사용법
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

customPromiseAll([promise1, promise2, promise3])
  .then((values) => {
    console.log(values); // 예상 출력: [3, 42, 'foo']
  })
  .catch((error) => {
    console.error("하나 이상의 프로미스가 실패했습니다:", error);
  });
