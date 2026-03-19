function customPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const result = [];
    let count = 0;

    if (promises.length === 0) {
      resolve(result);
      return;
    }

    promises.forEach((promise, idx) => {
      Promise.resolve(promise)
        .then((val) => {
          result[idx] = val;
          count++;

          if (count === promises.length) {
            resolve(result);
          }
        })
        .catch((e) => {
          reject(e);
        });
    });
  });
}

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

customPromiseAll([promise1, promise2, promise3])
  .then((values) => {
    console.log(values); // 출력: [3, 42, 'foo']
  })
  .catch((error) => {
    console.error("하나 이상의 프로미스가 실패했습니다:", error);
  });
