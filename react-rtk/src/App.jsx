import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CakeVew from './features/cake/CakeView'
import IcecreamView from './features/icecream/IcecreamView'
import UserVew from './features/user/UserVew'
import CakeView from './features/cake/CakeView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CakeView />
      <IcecreamView />
      <UserVew />
    </div>
  )
}

export default App
