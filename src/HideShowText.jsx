import { useState } from "react"

export default function HideShowText() {

  const [isActive, setIsVisible] = useState(true);

  return (
    <div className="card">
      {
        isActive === true ? <p>Hello, React Learner!</p> : ""
      }

      <button onClick={() => setIsVisible(true)}>Show</button>
      <button onClick={() => setIsVisible(false)}>Hide</button>
    </div>
  )
}