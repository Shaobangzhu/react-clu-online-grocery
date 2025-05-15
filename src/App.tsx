// Hook 相关的类型定义

import { useState } from 'react';

type User = {
  name?: string;
}

function App() {
  const [ user, setUser ] = useState<User>({} as User)
  return (
    <div>
      <button onClick={() => {setUser({name: 'Extron'})}}>button</button>
      <div>{user?.name}</div>
    </div>
  );
}

export default App;