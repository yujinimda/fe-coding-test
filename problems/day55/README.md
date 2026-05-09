# [Day55] ⚡ ⚡ JavaScript 이벤트 이미터(EventEmitter) 구현

**카테고리:** ⚡ JavaScript
**난이도:** 🟡 Medium
**제한 시간:** 15분

---

## 문제

이벤트 이미터(EventEmitter)를 구현하여 이벤트 등록, 제거 및 트리거 기능을 지원하는 클래스를 작성하세요. 이 클래스는 쇼핑몰의 알림 시스템에 사용될 수 있습니다.

## 코드

```typescript
class EventEmitter {
  constructor() {
    this.events = {}; // 이벤트를 저장할 객체
  }

  // 이벤트를 등록하는 메서드
  on(event, listener) {
    // TODO: 여기에 구현하세요
  }

  // 이벤트를 제거하는 메서드
  off(event, listener) {
    // TODO: 여기에 구현하세요
  }

  // 이벤트를 트리거하는 메서드
  emit(event, ...args) {
    // TODO: 여기에 구현하세요
  }
}

// 사용 예시
const emitter = new EventEmitter();

function onUserLogin(userId) {
  console.log(`User ${userId} logged in.`);
}

emitter.on('login', onUserLogin);
emitter.emit('login', 42);
emitter.off('login', onUserLogin);
emitter.emit('login', 42); // 이 호출은 아무런 효과가 없어야 합니다.
```

## 요구사항

1. 이벤트를 등록할 수 있어야 합니다.
2. 등록된 이벤트를 제거할 수 있어야 합니다.
3. 등록된 이벤트를 트리거할 수 있어야 합니다.
4. 제거된 이벤트는 더 이상 트리거되지 않아야 합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

이벤트를 등록할 때는 이벤트 이름을 키로 사용하여 리스너 배열을 저장하세요. 이벤트를 제거할 때는 해당 배열에서 리스너를 제거하세요.

</details>
