/**
 * @param {number[]} arr - 정렬되지 않은 숫자 배열
 * @return {number[]} - 오름차순으로 정렬된 배열
 */
function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// 테스트 케이스
const nums = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(nums)); // 결과: [11, 12, 22, 25, 34, 64, 90]
