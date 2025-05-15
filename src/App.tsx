// Hook 相关的类型定义

import { useEffect, useRef } from 'react';

function App() {

  const ref = useRef<number | null>(null);

  useEffect(() => {
    ref.current = window.setTimeout(() => {
      console.log('timer')
    }, 1000);
    return clearTimeout(ref.current);
  }, [])

  return (
    <div>Hello Ref Hook</div>
  );
}

export default App;