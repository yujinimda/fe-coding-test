/**
 * 버블 정렬로 배열을 오름차순 정렬
 * @param {number[]} arr - 정렬되지 않은 숫자 배열
 * @return {number[]} - 오름차순으로 정렬된 배열
 */
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // 인접한 두 원소 비교 후 swap
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
