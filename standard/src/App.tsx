import { useState } from 'react'
import './App.css'
import { useFetchData } from './useFetchData'
import { Heading } from './components/Heading'
import { Dashboard } from './components/Dashboard'

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
      <Dashboard data={data} />
    </>
  )
}

export default App
