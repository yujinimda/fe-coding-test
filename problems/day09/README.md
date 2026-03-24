# [Day09] ⚡ 이벤트 이미터(EventEmitter) 구현

**카테고리:** ⚡ JavaScript
**난이도:** 🟡 Medium
**제한 시간:** 15분

---

## 문제

이벤트 기반 시스템에서 이벤트 이미터는 다양한 이벤트를 등록하고, 발생시키고, 제거하는 데 사용됩니다. 이 문제에서는 간단한 이벤트 이미터를 구현합니다. 이벤트 등록, 발생, 제거 기능을 포함해야 합니다.

## 코드

```typescript
class EventEmitter {
  constructor() {
    this.events = {}; // 이벤트를 저장할 객체
  }

  // TODO: 여기에 구현하세요
  on(event, listener) {
    
  }

  // TODO: 여기에 구현하세요
  emit(event, ...args) {
    
  }

  // TODO: 여기에 구현하세요
  off(event, listener) {
    
  }
}

// 사용 예시
const emitter = new EventEmitter();
function onUserLogin(user) {
  console.log(`${user} has logged in.`);
}
emitter.on('login', onUserLogin);
emitter.emit('login', 'Alice'); // 콘솔에 'Alice has logged in.' 출력
emitter.off('login', onUserLogin);
emitter.emit('login', 'Bob'); // 아무것도 출력되지 않음
```

## 요구사항

1. 이벤트를 등록하는 on 메서드를 구현하세요. 이 메서드는 이벤트 이름과 리스너 함수를 인자로 받아야 합니다.
2. 이벤트를 발생시키는 emit 메서드를 구현하세요. 이 메서드는 이벤트 이름과 전달할 인자를 받아야 하며, 등록된 모든 리스너를 호출해야 합니다.
3. 이벤트를 제거하는 off 메서드를 구현하세요. 이 메서드는 이벤트 이름과 제거할 리스너 함수를 인자로 받아야 합니다.
4. 등록된 이벤트가 없거나 리스너가 없을 경우에도 오류 없이 동작해야 합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

이벤트를 등록할 때는 이벤트 이름을 키로 하고, 리스너 배열을 값으로 저장하세요. 이벤트 발생 시 해당 배열의 모든 리스너를 호출하세요.

</details>
