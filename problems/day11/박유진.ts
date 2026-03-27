// ## 문제

// 주어진 객체를 깊은 복사하는 함수를 작성하세요. 이 함수는 객체의 중첩된 구조까지 모두 복사해야 합니다. 객체의 중첩된 배열이나 객체가 변경되더라도 원본 객체에는 영향을 미치지 않아야 합니다.

// ## 코드

type sampleDataType = {
  user: {
    name: string,
    age: number,
    preferences: preferencesType,  
  }
  items: itemtype[]
}

type preferencesType =  {
  theme: string,
  notifications: boolean
}

type itemtype = {
  id: number,
  name: string,
  price: number
}

const sampleData = {
  user: {
    name: 'Alice',
    age: 30,
    preferences: {
      theme: 'dark',
      notifications: true
    }
  },
  items: [
    { id: 1, name: 'Book', price: 10 },
    { id: 2, name: 'Pen', price: 2 }
  ]
};

// TODO: 여기에 구현하세요
function deepClone(obj: sampleDataType): sampleDataType {
  // 배열인지 체크
  if (Array.isArray(obj)) {
    // 하나하나 다 빠개서 다시 재귀로 돌림
    return obj.map(item => deepClone(item as any)) as any;
  }
  
  // 객체인지 체크
  if (typeof obj === 'object' && obj !== null) {
    // 복사본 빈 객체
    const cloned: any = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        cloned[key] = deepClone((obj as any)[key]);
      }
    }
    return cloned;
  }
  
  // primitive 타입은 그대로 반환
  return obj;
}

//그런데 재귀함수가 아닌 초간단하게 푸는게 있었따..!
// function deepClone(obj: sampleDataType): sampleDataType {
//   return structuredClone(obj);
// }

// ## 요구사항

// 1. 객체의 모든 속성을 깊은 복사해야 합니다.
// 2. 중첩된 객체와 배열도 모두 복사해야 합니다.
// 3. 복사된 객체의 속성을 변경해도 원본 객체에는 영향을 미치지 않아야 합니다.


