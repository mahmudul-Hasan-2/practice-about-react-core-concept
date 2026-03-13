export default function User({ user }) {

  const {name, address:{city}, company} = user;

  return (
    <div className="card">
      <h5>Name: {name}</h5>
      <p>City: {city}</p>
      <p>company: {company.name}</p>
    </div>
  )
}