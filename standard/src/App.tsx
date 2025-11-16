import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useFetchData } from './useFetchData'
import { Heading } from './components/Heading'

function App() {
  const [count, setCount] = useState(0)
  
  const { data } = useFetchData()

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Heading title={Object.keys(data)[0]} />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
