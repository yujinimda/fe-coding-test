/*
Promise.allSettled는
모든 Promise가 성공/실패 여부와 상관없이 전부 끝날 때까지 기다린 다음
각 결과를 status + 값 형태로 배열로 반환한다
*/

function customPromiseAllSettled(promises) {
  const result = new Array(promises.length);
  let count = 0;

  return new Promise((resolve) => {
    if (promises.length === 0) {
      return resolve([]);
    }

    promises.forEach((promise, i) => {
      Promise.resolve(promise)
        .then(
          (value) => {
            result[i] = { status: "fulfilled", value };
          },
          // then의 두번째 인자는 해당 Promise의 reject를 처리
          // catch는 체인 전체에서 발생한 에러를 처리
          (error) => {
            result[i] = { status: "rejected", reason: error };
          },
        )
        .finally(() => {
          if (++count === promises.length) {
            resolve(result);
          }
        });
    });
  });
}

// 테스트
customPromiseAllSettled([
  Promise.resolve("A"),
  Promise.reject("Error"),
  123,
]).then(console.log);

/*
[
  { status: 'fulfilled', value: 'A' },
  { status: 'rejected', reason: 'Error' },
  { status: 'fulfilled', value: 123 }
]
*/
