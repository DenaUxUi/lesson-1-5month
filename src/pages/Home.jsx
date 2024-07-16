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
      <ul>
        {users.map((item) => (
          <h3 key={item.id}>
            <Link to={`/user/${item.id}`}>{item.name}</Link>
          </h3>
        ))}
      </ul>
    </div>
  );
};

export default Page2;
