
// 여러 개의 비동기 작업을 병렬로 처리하고, 모든 작업이 완료되면 결과를 반환하는 함수를 작성하세요. 이 함수는 Promise.all과 유사하게 동작해야 합니다.


function customPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let count = 0;

    if (promises.length === 0) return resolve([]);

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          count++;
          if (count === promises.length) resolve(results);
        })
        .catch(reject);
    });
  });
}
// 테스트를 위한 비동기 함수들
const promise1 = new Promise((resolve) => setTimeout(() => resolve('Result 1'), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Result 2'), 500));
const promise3 = new Promise((resolve) => setTimeout(() => resolve('Result 3'), 1500));

// customPromiseAll을 사용하여 모든 결과를 출력하세요
customPromiseAll([promise1, promise2, promise3]).then((results) => {
  console.log(results); // ['Result 1', 'Result 2', 'Result 3']
});

// ## 요구사항

// 1. customPromiseAll 함수는 Promise.all과 유사하게 동작해야 합니다.
// 2. 모든 입력된 Promise가 완료되면 결과 배열을 반환해야 합니다.
// 3. 입력된 Promise 중 하나라도 실패하면 customPromiseAll은 즉시 실패해야 합니다.
// 4. Promise가 아닌 값이 입력되면 해당 값을 그대로 결과 배열에 포함해야 합니다.

