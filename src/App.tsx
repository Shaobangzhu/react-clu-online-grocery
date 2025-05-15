// Hook 相关的类型定义, forwardRef, useImperativeHandle

import { ReactNode, useImperativeHandle, useRef, forwardRef } from "react";

type PropsType = {
  children: ReactNode
}

type RefType = {
  start: () => void;
}

const Child = forwardRef<RefType, PropsType>((props, ref) => {
  useImperativeHandle(ref, () => {
    return {
      start() {
        console.log('start');
      }
    }
  })

  return <div>{props.children}</div>
})

function App() {
  const ref = useRef<RefType>(null!);

  return (
    <>
      <button onClick={() => {ref.current.start()}}>click</button>
      <Child ref={ref}>React is the best!</Child>
    </>
  );
}

export default App;