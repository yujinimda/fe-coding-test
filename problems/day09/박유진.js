
class EventEmitter {
  constructor() {
    this.events = {}; // 이벤트를 저장할 객체
  }

  // TODO: 여기에 구현하세요
  on(event, listener) {
    if(!this.events[event]){
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  // TODO: 여기에 구현하세요
  emit(event, ...args) {
    if(!this.events[event]) return;

    this.events[event].forEach((listener)=>{
      listener(...args);
    })
  }

  // TODO: 여기에 구현하세요
  off(event, listener) {
     if(!this.events[event]) return;
     // 처음에는 remove로 지웠다;; 배열에서는 못쓴다는걸 기억하자
     this.events[event] = this.events[event].filter(
    (storedListener) => storedListener !== listener
  );
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


// ## 요구사항

// 1. 이벤트를 등록하는 on 메서드를 구현하세요. 이 메서드는 이벤트 이름과 리스너 함수를 인자로 받아야 합니다.
// 2. 이벤트를 발생시키는 emit 메서드를 구현하세요. 이 메서드는 이벤트 이름과 전달할 인자를 받아야 하며, 등록된 모든 리스너를 호출해야 합니다.
// 3. 이벤트를 제거하는 off 메서드를 구현하세요. 이 메서드는 이벤트 이름과 제거할 리스너 함수를 인자로 받아야 합니다.
// 4. 등록된 이벤트가 없거나 리스너가 없을 경우에도 오류 없이 동작해야 합니다.

