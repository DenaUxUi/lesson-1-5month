import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for proper navigation

const Page1 = () => {
  const [posts, setPosts] = useState([]); // Use 'posts' instead of 'users'
  const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then (responce => responce.json())
        .then((data) =>{
            setPosts(data)
        })
    }, [])

  return (
    <div>
      <h1>Page 1</h1>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page1;
