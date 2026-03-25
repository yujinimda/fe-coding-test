class EventEmitter {
  constructor() {
    this.events = {}; // 이벤트를 저장할 객체
  }

  /**
   * 이벤트 리스너를 등록
   * @param {string} event - 이벤트 이름
   * @param {Function} listener - 등록할 리스너 함수
   * @returns {void}
   */
  on(event, listener) {
    // 이벤트가 한 번도 등록된 적 없을 때
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  /**
   * 이벤트를 발생
   * @param {string} event - 이벤트 이름
   * @param  {...any} args - 전달할 인자
   * @returns {void}
   */
  emit(event, ...args) {
    const listeners = this.events[event];
    // 이벤트에 등록된 리스너가 없을 때
    if (!listeners) {
      return;
    }
    [...listeners].forEach((callback) => {
      callback(...args);
    });
  }

  /**
   * 이벤트 리스너를 제거
   * @param {string} event - 이벤트 이름
   * @param {Function} listener - 제거할 리스너 함수
   * @returns {void}
   */
  off(event, listener) {
    // 이벤트가 한 번도 등록된 적 없을 때
    if (!this.events[event]) {
      return;
    }
    this.events[event] = this.events[event].filter(
      (callback) => callback !== listener,
    );
    if (this.events[event].length === 0) {
      delete this.events[event];
    }
  }
}

// 사용 예시
const emitter = new EventEmitter();

function onUserLogin(user) {
  console.log(`${user} has logged in.`);
}

function onUserLoginCheck(user) {
  console.log(`Login Check - ${user}`);
}

emitter.on("login", onUserLogin);
emitter.on("login", onUserLoginCheck);
emitter.emit("login", "Alice"); // 콘솔에 'Alice has logged in.' 과 'Login Check - Alice' 출력
emitter.off("login", onUserLogin);
emitter.emit("login", "Bob"); // 콘솔에 'Login Check - Bob' 출력
