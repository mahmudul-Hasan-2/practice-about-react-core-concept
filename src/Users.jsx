import { use } from "react"
import User from "./User";


export default function Users({ userPromise }) {

  const users = use(userPromise);

  return (
    <div>
      <h2>Users: {users.length}</h2>
      {
        users.map(user => <User user={user}></User>)
      }
    </div>
  )
}