import { useState } from 'react'
import NavBar from './components/NavBar'

const App = () => {
  const [count, setCount] = useState(22)
  return (
    <>
      <NavBar />
    </>
  )
}

export default App
