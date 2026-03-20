// Promise.all() = 여러 비동기 작업을 한 번에 기다리는 메서드
// - 배열 안의 Promise를 모두 기다림
// - 전부 성공하면 결과를 배열로 반환
// - 하나라도 실패하면 바로 catch로 감


function customPromiseAll(promises) {
  let result = []
  let count = 0

  return new Promise((res, rej)=> {
    for (let i = 0; i<promises.length;  i++){
      Promise.resolve(promises[i])
        .then((val) => {
          //result.push(val)
          result[i] = val
          count++;

          if (count === promises.length){
            res(result)
          }
        })
      .catch((error) => {
        rej(error);
      })
    }
  })
}


// result.push(val)이렇게 풀었다가 순서가 깨질수 있다고 ai에서 수정을 하라했다
// Promise.all은 입력순서를 지켜야하기 때문에 result.push(val)을 하게 되면 빨리 끝난 순서대로 들어가게 된다.
// 그래서  result[i] = val로 수정하였다
// 터미널 콘솔 확인 [ 3, 42, 'foo' ]



// 예제 사용법
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

customPromiseAll([promise1, promise2, promise3]).then((values) => {
  console.log(values); // 예상 출력: [3, 42, 'foo']
}).catch((error) => {
  console.error('하나 이상의 프로미스가 실패했습니다:', error);
});