import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1);
  }

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  const handleReset = () => {
    setCount(0);
  }

  return (
    <div className="card">
      <h2>Count: {count}</h2>

      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}