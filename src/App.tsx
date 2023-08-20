import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [count, setCount] = useState(0)
  const A=[1,2,3,4,5,6,7,8,10];
  const N=10;
  const missingNumber= (array:number[], n:number)=> {
    let i, total;
    total = (n + 1) * (n) / 2;
    for (i = 0; i < n-1; i++)
        total -= array[i];
   setCount(total);
}
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() =>missingNumber(A,N)}>
          Number is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
