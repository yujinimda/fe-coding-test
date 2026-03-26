class EventEmitter {
  constructor() {
    // 이벤트 명을 객체 키로 한 배열들을 저장
    this.events = {}; // 이벤트를 저장할 객체
  }

  // 이벤트를 기다리는 역할 (구독, 감시자)
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }

    this.events[event].push(listener);
    return this;
  }

  // 등록된 이벤트를 찾아서 실행시키는 역할
  // 첫 번째 인자 제외하고 배열로 묶기 위해서 ...args로
  emit(event, ...args) {
    if (!this.events[event]) {
      return;
    }

    this.events[event].forEach((callback) => callback(...args));
  }

  // 특정 이벤트에 등록된 함수를 제거
  off(event, listener) {
    if (!this.events[event]) {
      // this를 반환하면 체이닝이 끊기지 않게 할 수 있음
      return this;
    }

    this.events[event] = this.events[event].filter(
      (callback) => callback !== listener,
    );
  }
}

// 사용 예시
const emitter = new EventEmitter();
function onUserLogin(user) {
  console.log(`${user} has logged in.`);
}

function onUserHello(user) {
  console.log(`${user}! hello.`);
}

emitter.on("login", onUserLogin);
emitter.on("login", onUserHello); // < 테스트로 추가
emitter.emit("login", "Alice"); // 콘솔에 'Alice has logged in.' 출력
emitter.off("login", onUserLogin);
emitter.emit("login", "Bob"); // hello만 출력
