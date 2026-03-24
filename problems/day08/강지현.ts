import React, { Component, Suspense } from "react";

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
const UserData = React.lazy(() => {
  return fetchUserData().then(
    data => ({
      default: () => <div>User: {data.name}, Age: {data.age}</div>
    }),
    error => { throw new Error(error); }
  )
});

// TODO: 에러 바운더리 클래스 컴포넌트를 구현하세요
// - hasError 상태를 관리해야 합니다
// - getDerivedStateFromError로 에러 상태를 업데이트해야 합니다
// - 에러 발생 시 'Something went wrong while loading user data.' 메시지를 표시해야 합니다
class ErrorBoundary extends Component<{children: React.ReactNode}> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong while loading user data.</h1>;
    }

    return this.props.children;
  }
}

// TODO: Suspense를 활용하여 로딩 상태를 처리하는 App 컴포넌트를 구현하세요
// - 로딩 중일 때 'Loading user data...' 메시지를 표시해야 합니다
// - ErrorBoundary로 에러를 처리해야 합니다
function App() {
  return (
     <ErrorBoundary>
      <Suspense fallback={<div>Loading user data...</div>}>
        <UserData />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
