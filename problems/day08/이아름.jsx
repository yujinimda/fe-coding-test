import { Component, lazy, Suspense } from "react";

// 비동기 데이터 페칭을 시뮬레이션하는 함수
function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve({ name: "John Doe", age: 30 });
      } else {
        reject("Failed to fetch user data");
      }
    }, 1000);
  });
}

// TODO: React.lazy를 활용하여 사용자 데이터를 표시하는 비동기 컴포넌트를 구현하세요
// fetchUserData()의 결과를 이용해 사용자 이름과 나이를 렌더링해야 합니다
// 에러 발생 시 Error를 throw해야 합니다
const UserData = lazy(() =>
  fetchUserData().then((data) => ({
    default: () => (
      <div>
        <h1>User Profile</h1>
        <p>Name: {data.name}</p>
        <p>Age: {data.age}</p>
      </div>
    ),
  })),
);
// TODO: 에러 바운더리 클래스 컴포넌트를 구현하세요
// - hasError 상태를 관리해야 합니다
// - getDerivedStateFromError로 에러 상태를 업데이트해야 합니다
// - 에러 발생 시 'Something went wrong while loading user data.' 메시지를 표시해야 합니다
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // 순수하게 상태만 다룸 - static
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  // 실제 객체의 기능
  componentDidCatch(error, info) {
    console.error("에러 발생:", error);
    console.log("컴포넌트 위치 정보:", info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

// TODO: Suspense를 활용하여 로딩 상태를 처리하는 App 컴포넌트를 구현하세요
// - 로딩 중일 때 'Loading user data...' 메시지를 표시해야 합니다
// - ErrorBoundary로 에러를 처리해야 합니다
function App() {
  return (
    <div style={{ margin: "40px" }}>
      <ErrorBoundary
        fallback={<div>Something went wrong while loading user data.</div>}
      >
        <Suspense fallback={<div>Loading user data...</div>}>
          <UserData />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
