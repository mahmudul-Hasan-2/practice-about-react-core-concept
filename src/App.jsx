import './App.css'
import Counter from './Counter'
import HideShowText from './HideShowText'
import Users from './Users'
import { Suspense } from 'react'

const users = async () => {
  let res = await fetch('https://jsonplaceholder.typicode.com/users');
  let data = await res.json();
  return data;
}


function App() {

  const userPromise = users();

  return (
    <>
      <Counter></Counter>
      <HideShowText></HideShowText>
      <Suspense fallback={<h2>Loading Users</h2>}>
        <Users userPromise={userPromise}></Users>
      </Suspense>
      {/* <Users></Users> */}
    </>
  )
}

export default App
