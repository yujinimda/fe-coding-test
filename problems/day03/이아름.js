/**
 * 커스텀 배열 메서드 구현하기
 * 요구사항
 * 1. customPromiseAll 함수는 Promise.all과 동일하게 작동해야 합니다.
 * 2. 모든 프로미스가 성공하면 결과 배열을 반환해야 합니다.
 * 3. 하나의 프로미스라도 실패하면 전체가 실패로 간주되어야 합니다.
 * 4. 입력으로 받은 배열의 각 요소는 프로미스 또는 값일 수 있습니다.
 */

function customPromiseAll(promises) {
  const results = [];
  let completedCount = 0;

  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      return resolve([]);
    }

    promises.forEach((promise, i) => {
      // 일반 값 처리를 위해 Promise.resolve로 감쌈
      Promise.resolve(promise)
        .then((value) => {
          results[i] = value;
          completedCount++;

          if (completedCount === promises.length) {
            resolve(results);
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
    console.log(values); // 출력 > [ 3, 42, 'foo']
  })
  .catch((error) => {
    console.error("하나 이상의 프로미스가 실패했습니다:", error);
  });
