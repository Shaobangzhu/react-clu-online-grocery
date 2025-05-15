// Hook 相关的类型定义, useContext

import { createContext, useContext, useState } from 'react'

type GenderType = {
  value: 'male' | 'female'
}

const GenderContext = createContext<GenderType>({value: 'male'})

// ---------------------------------------------------

const ChildComponent = () => {
  const gender = useContext(GenderContext);
  return <div>MJ is {gender.value}</div>
}

// ---------------------------------------------------

const App = () => {
  const [ gender, setGender ] = useState<GenderType>({value: 'male'});
  
  return (
    <GenderContext.Provider value={gender}>
      <button onClick={() => {setGender({value: 'female'})}}>toggle</button>
      <ChildComponent />
    </GenderContext.Provider>
  )
}

export default App;