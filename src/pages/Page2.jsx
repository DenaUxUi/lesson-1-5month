import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for proper navigation

const Page2 = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then (responce => responce.json())
    .then((data) =>{
        setUsers(data)
    })
}, [])

  return (
    <div>
      <h1>Page 2</h1>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            <Link to={`/user/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page2;
