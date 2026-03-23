# [Day08] ⚛️ 에러 바운더리와 Suspense를 활용한 사용자 정보 로딩

**카테고리:** ⚛️ React
**난이도:** 🟢 Easy
**제한 시간:** 15분

---

## 문제

사용자 정보를 비동기로 불러오는 컴포넌트를 구현하세요. 이 컴포넌트는 에러가 발생할 경우 에러 메시지를 보여주고, 로딩 중일 때는 로딩 메시지를 보여줘야 합니다. 에러 바운더리와 Suspense를 활용하여 구현하세요.

## 코드

```typescript
import React, { Component, Suspense } from 'react';

// Mock function to simulate data fetching
function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve({ name: 'John Doe', age: 30 });
      } else {
        reject('Failed to fetch user data');
      }
    }, 1000);
  });
}

// Component to display user data
const UserData = React.lazy(() => {
  return fetchUserData().then(
    data => ({ default: () => <div>User: {data.name}, Age: {data.age}</div> }),
    error => { throw new Error(error); }
  );
});

// Error Boundary Component
class ErrorBoundary extends Component {
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
      return <div>Something went wrong while loading user data.</div>;
    }
    return this.props.children;
  }
}

// Main App Component
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
```

## 요구사항

1. 에러가 발생하면 'Something went wrong while loading user data.' 메시지를 보여줘야 합니다.
2. 로딩 중일 때는 'Loading user data...' 메시지를 보여줘야 합니다.
3. 사용자 데이터가 성공적으로 로드되면 'User: [name], Age: [age]' 형식으로 보여줘야 합니다.

## 힌트

<details>
<summary>💡 힌트 보기</summary>

React.lazy와 Suspense를 사용하여 비동기 컴포넌트를 만들고, 에러 바운더리를 통해 에러를 처리하세요.

</details>
